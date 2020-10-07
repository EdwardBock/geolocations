/**
 * Created by edward on 19.07.17.
 */

(function($, LOC){

	const $geolocations = $("#geolocations");

	const $wrapper = $("<div></div>").addClass("geolocations__copy-address");
	$geolocations.find(".geolocations__address-field").first().before($wrapper);



	function address_copy(){

		const $el = $(`<div class="ui-front">
			<label>${LOC.autocomplete.label}<br><input class="regular-text" /></label>
		</div>`);

		/**
		 * autocomplete select event
		 * @param event
		 * @param ui
		 * @return {boolean}
		 */
		function on_autocomplete_select(event, ui){
			const {item} = ui;
			for( const field in item.values){
				if(!item.values.hasOwnProperty(field)) continue;
				$(`[data-geolocations-field=${field}]`).val(item.values[field]);
			}
			show_open();
			return false;
		}
		/**
		 * add autocomplete
		 * @param ul
		 * @param item
		 * @return {*|HTMLElement}
		 * @private
		 */
		$el.find("input")
		.autocomplete({
			source: ajaxurl+"?action=geolocations_admin",
			minLength: 3,
			select: on_autocomplete_select,
			// appendTo: "#geolocations__copy-address--list",
		}).autocomplete( "instance" )._renderItem = function( ul, item ) {
			return $("<li class='copy-address__item'>").append(
				`<span class="copy-address__item--title">${item.post_title}</span>
<span class='copy-address__item--id' >ID: ${item.ID}</span>
<span class="copy-address__item--info">${item.address}</span>`
			).appendTo(ul);
		};
		return $el;
	}

	function open_address_copy(){
		return $(`<a href="#">${LOC.autocomplete.label}</a>`).on("click", function(e){
			e.preventDefault();
			show_copy();
		});
	}

	function show_open() {
		$wrapper.empty().append(open_address_copy());
	}
	function show_copy() {
		$wrapper.empty().append(address_copy());
	}

	show_open();

})(jQuery, Geolocations_MetaBox);