import '@babel/polyfill'
import '../style/tinymce-plugin.scss';

(function( $ ) {
	'use strict';

	if (typeof tinymce !== typeof undefined){

		/**
		 * Add plugin to tinymce editor
		 */
		tinymce.PluginManager.add('geolocations', function( editor, url ) {

			const TEXT = window.geolocations.text;
			const TAXONOMIES = window.geolocations.taxonomies;

			$("body").on("change", ".geolocations-dialog input",function(){
				const $this = $(this);
				if($this.attr("name") === "single"){
					if($this.is(":checked")){
						$("[data-geolocations-single='0']").hide();
						$("[data-geolocations-single='1']").show();
					} else {
						$("[data-geolocations-single='1']").hide();
						$("[data-geolocations-single='0']").show();
					}
				}
			});

			/**
			 * start edit postqueue if node is postqueue node
			 * @param node
			 */
			function editItem( node ) {
				var data;

				if ( node.nodeName !== 'DIV' || !editor.dom.hasClass( node, 'geolocations' ) ) {
					return;
				}

				data = window.decodeURIComponent( editor.dom.getAttrib( node, 'data-geolocations' ) );

				// Make sure we've selected a postqueue node.
				if ( editor.dom.hasClass( node, 'geolocations' ) ) {
					openEditor(node);
				}
			}

			/**
			 * open editor for postqueue
			 * @param node
			 */
			function openEditor(node){

				let single, taxonomy, terms, address, address_id;

				/**
				 * collect data
				 */
				if(typeof node !== typeof undefined){
					single = node.getAttribute("data-single");

					if(typeof single === typeof undefined || !single){
						single = false;
					} else {
						single = true;
					}

					taxonomy = "";
					terms = "";
					for(let i = 0; i < node.attributes.length; i++){
						let att = node.attributes[i];
						let name = att.nodeName;
						if(name.indexOf("data-tax_") === 0){
							terms = node.getAttribute(name);
							taxonomy = name.replace("data-tax_","");
						}
					}

					const address_node = node.getAttribute("data-address");
					const address_id_node = node.getAttribute("data-id");

					address = (typeof address_node === typeof "")? address_node: "";
					address_id = (typeof address_id_node === typeof "")? address_id_node : "";
				}

				/**
				 * autocomplete select event
				 * @param event
				 * @param ui
				 * @return {boolean}
				 */
				function on_autocomplete_select(event, ui){
					const {item} = ui;
					address_id = item.ID;
					$(this).val(item.post_title);
					return false;
				}

				/*
				 * open the editor overlay
				 */
				var win = editor.windowManager.open({
					title: "Geolocations",
					html:  `
<div class="geolocations-dialog" >
	
	<div class="geolocations-dialog__field">
		<label><input id="geolocations-single" type="checkbox" name="single" ${(single)?"checked":""} /> ${TEXT.single_text}</label>
	</div>
	
	<div data-geolocations-single="0">
		<div class="geolocations-dialog__field">
			<label><span class="geolocations-dialog__label--text">${TEXT.taxonomy}</span><br>
				<select id="geolocations-taxonomy" class="geolocations-dialog__select">
					${TAXONOMIES.map((tax)=>{
						return `<option value="${tax.value}" ${(tax.value === taxonomy)?"selected":""}>${tax.text}</option>`;
							}).join("")}
				</select>
			</label>
		</div>
		<div class="geolocations-dialog__field">
			<label>
				<span class="geolocations-dialog__label--text">${TEXT.terms}</span><br>
				<small>${TEXT.terms_tooltip}</small><br>
				<input id="geolocations-terms" type="text" value="${terms}" />
			</label>
		</div>
	</div>
	
	<div data-geolocations-single="1">
		<div class="geolocations-dialog__field">
			<label>
				<span class="geolocations-dialog__label--text">${TEXT.address_label}</span><br>
				<span class="geolocations-dialog__description">${TEXT.address_tooltip}</span><br>
				<input id="geolocations-address" type="text" value="${address}" /><br>
				<div id="geolocations-address__list"></div>
			</label>
		</div>
	</div>
	
</div>
`,
					height: 320,
					width: 340,
					buttons: [
						{
							text: 'Ok',
							subtype: 'primary',
							onclick: function() {

								const $single = $("#geolocations-single");
								const $address = $("#geolocations-address");
								const $taxonomy = $("#geolocations-taxonomy");
								const $terms = $("#geolocations-terms");

								let _single = "";
								if($single.is(":checked")){
									_single = "single=\"true\"";
								}

								let _tax = "";
								let _address = "";
								if(_single === ''){
									if($taxonomy.length && $taxonomy.val() !== '' && $terms.length && $terms.val() !== ''){
										_tax = `tax_${$taxonomy.val()}="${$terms.val().replace(" ","")}"`;
									}
								} else if( address_id !== '' && $address.val() !== ''){
									_address=`address="${$address.val()}" id="${address_id}"`
								}

								editor.insertContent(`[geolocations_map ${_single} ${_address} ${_tax}]`);
								win.close();
							}
						},
						{
							text: 'Close',
							onclick: function() {
								win.close();
							}
						},
					],
				});

				setTimeout(()=>{
					$("#geolocations-single").trigger("change");
					$("#geolocations-address")
						.autocomplete({
							source: ajaxurl+"?action=geolocations_admin",
							minLength: 3,
							select: on_autocomplete_select,
							appendTo: "#geolocations-address__list",
						}).autocomplete( "instance" )._renderItem = function( ul, item ) {
							return $( "<li class='geolocations-dialog__address-item'>" )
							.append(
								`<span class="geolocations-dialog__address-item--title">${item.post_title}</span>
<span class='geolocations-dialog__address-item--id' >ID: ${item.ID}</span>
<span class="geolocations-dialog__address-item--info">${item.address}</span>`
							)
							.appendTo( ul );
						}
				},300);



			}


			/**
			 * check mouseup in editor
			 */
			editor.on( 'mouseup', function( event ) {
				var dom = editor.dom,
					node = event.target;

				function unselect() {
					dom.removeClass( dom.select( 'div.geolocations' ), 'geolocations-selected' );
				}

				if ( node.nodeName === 'DIV' && dom.getAttrib( node, 'data-geolocations' ) ) {
					// Don't trigger on right-click
					if ( event.button !== 2 ) {
						if ( dom.hasClass( node, 'geolocations-selected' ) ) {
							editItem( node );
						} else {
							unselect();
							dom.addClass( node, 'geolocations-selected' );
						}
					}
				} else {
					unselect();
				}
			});

			// Display gallery, audio or video instead of img in the element path
			editor.on( 'ResolveName', function( event ) {
				var dom = editor.dom,
					node = event.target;
				if ( node.nodeName === 'DIV' && dom.getAttrib( node, 'data-geolocations' ) ) {
					if ( dom.hasClass( node, 'geolocations' ) ) {
						event.name = 'geolocations';
					}
				}
			});

			/**
			 * init the postqueue tinymce items
			 */
			editor.on('preInit', function() {
				function hasPostqueueClass(node) {
					var className = node.attr('class');
					return className && /\bgeolocations\b/.test(className);
				}

				function toggleContentEditableState(state) {
					return function(nodes) {
						var i = nodes.length, node;

						function toggleContentEditable(node) {
							node.attr('contenteditable', state ? 'true' : null);
						}

						while (i--) {
							node = nodes[i];

							if (hasPostqueueClass(node)) {
								node.attr('contenteditable', state ? 'false' : null);
								// tinymce.each(node.getAll('figcaption'), toggleContentEditable);
							}
						}
					};
				}

				editor.parser.addNodeFilter('div', toggleContentEditableState(true));
				editor.serializer.addNodeFilter('div', toggleContentEditableState(false));
			});

			/**
			 * replace shortcode by html representation for tinymce
			 */
			editor.on( 'BeforeSetContent', function( event ) {
				event.content = event.content.replace( /\[geolocations_map([^\]]*)\]/g, function( match, attrs ) {

					let found = [];
					let data = [];

					const regex = /(tax_)?([\w\-_]+)="([^"]+)"/g;

					let m;
					while ((m = regex.exec(attrs)) !== null) {
						// This is necessary to avoid infinite loops with zero-width matches
						if (m.index === regex.lastIndex) {
							regex.lastIndex++;
						}

						let _attr = m[2];

						if(m[1]){
							for(let i = 0; i < TAXONOMIES.length; i++){
								let t = TAXONOMIES[i];
								if(_attr === t.value){
									_attr = t.text;
									break;
								}
							}
						}

						found.push(`<b>${_attr}:</b> ${m[3]}`);
						data.push(`data-${m[2]}="${m[3]}"`);
					}


					return '<div data-geolocations="'+window.encodeURIComponent( match )+'" ' +
						data.join(" ")+' class="geolocations">'+
						'<span class="geolocations__title">Geolocations</span><br/>'+
						found.join(" <br/> ")+
						'<!--geolocations--></div>';
				});
			});

			/**
			 * restore shortcode from html
			 */
			editor.on( 'PostProcess', function( event ) {
				if ( event.get ) {
					event.content = event.content.replace(/<div[^>]+?data-geolocations="([^"]*?)".+?<!--geolocations--><\/div>/gi, function(match, data){
						return "<p>"+window.decodeURIComponent(data)+"</p>";
					});
				}

			});

			/**
			 * Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('...');
			 */
			editor.addCommand( 'Geolocations', function() {
				editItem( editor.selection.getNode() );
			});

			/**
			 * add button to editor
			 */
			editor.addButton('geolocations', {
				// text: 'Termine',
				title: "Geolocations",
				// image: url+'/../images/icon.png',
				icon: 'icon dashicons-before dashicons-location-alt',
				onclick: function() {
					/**
					 * opens jquery dialog
					 */
					openEditor(editor.selection.getNode());
				}
			});

		});

	}

})( jQuery );