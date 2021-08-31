<?php


namespace Geolocations;


use Geolocations\Model\Location;

/**
 * @property Components\Assets $helper
 */
class Assets extends Components\Component {

	public function onCreate() {

		$this->helper = new Components\Assets($this->plugin);

	}

	/**
	 * enqueue for frontend
	 */
	public function enqueueFrontend() {
		wp_enqueue_script(
			Plugin::HANDLE_JS_MAPS_API,
			"https://maps.googleapis.com/maps/api/js?key=".$this->plugin->settings->getApiKey()."&libraries=places",
			['wp-polyfill']
		);
		$this->helper->registerScript(
			Plugin::HANDLE_JS_FRONTEND,
			"/assets/frontend.js",
			[Plugin::HANDLE_JS_MAPS_API]
		);
		wp_enqueue_script(Plugin::HANDLE_JS_FRONTEND);
		wp_localize_script(
			Plugin::HANDLE_CSS_FRONTEND,
			"Geolocations",
			[
				"api_key" => $this->plugin->settings->getApiKey(),
			]
		);

		$this->helper->registerStyle(
			Plugin::HANDLE_CSS_FRONTEND,
			"/assets/style-frontend.css"
		);

		wp_enqueue_style( Plugin::HANDLE_CSS_FRONTEND );
	}

	/**
	 * enqueue for meta box
	 */
	public function enqueueMetaBoxJS() {
		wp_enqueue_script( 'jquery-ui-autocomplete' );
		$this->helper->registerScript(
			Plugin::HANDLE_JS_META_BOX,
			"/assets/meta-box.js",
		);
		wp_enqueue_script( Plugin::HANDLE_JS_META_BOX );
		wp_localize_script(
			Plugin::HANDLE_JS_META_BOX,
			"Geolocations_MetaBox",
			array(
				"autocomplete" => array(
					"label" => __( "Copy from Address", 'geolocations' ),
				),
			)
		);
		wp_enqueue_style( 'jquery-ui-styles' );
		$this->helper->registerStyle(
			Plugin::HANDLE_CSS_META_BOX,
			"/assets/meta-box.css",
		);
		wp_enqueue_style( Plugin::HANDLE_CSS_META_BOX );
	}

	/**
	 * enqueue for gutenberg
	 */
	public function enqueueGutenberg() {
		$this->helper->registerScript(
			Plugin::HANDLE_JS_GUTENBERG,
			"/assets/gutenberg.js",
		);
		wp_enqueue_script( Plugin::HANDLE_JS_GUTENBERG );

		$fields    = ( new Location( 0 ) )->getFields();
		$fieldsMap = [];
		foreach ( $fields as $field ) {
			$fieldsMap[] = [
				"label" => $this->plugin->metaBox->get_label_for_field( $field ),
				"key"   => $field,
				"hide" => $field === "type",
				"readonly" => $field === "gecoding_result_lng" || $field === "gecoding_result_lat",
			];
		}

		$query = new GeolocationsQuery(
			apply_filters(
				Plugin::FILTER_ADMIN_AJAX_QUERY_ARGS,
				array(
					'posts_per_page' => -1,
				)
			)
		);
		$posts = $query->getWPQuery()->get_posts();

		$locations = array();
		foreach ($posts as $post){
			$lpost = new GeolocationPost($post);
			$locations[] = [
				"ID" => $post->ID,
				"post_title" => $post->post_title,
				"address" => $lpost->getAddress(),
			];
		}

		$taxonomies = array();
		$taxs  = get_taxonomies(array(
			'public' => true,
		), 'objects');
		foreach ($taxs as $tax) {
			$taxonomies[] = array(
				"label"  => $tax->labels->name,
				"name" => $tax->name,
			);
		}

		wp_localize_script(
			Plugin::HANDLE_JS_GUTENBERG,
			"Geolocations",
			[
				"fields"       => $fieldsMap,
				"fieldPrefix" => Location::PREFIX,
				"postTypes" => $this->plugin->settings->getEnabledPostTypes(),
				"locations" => $locations,
				"taxonomies" => $taxonomies,
				"i18n" => [
					"onlyOneAddress" => __("Only one address", Plugin::DOMAIN),
					"onlyOneAddress_true" => __("Display one address on map", Plugin::DOMAIN),
					"onlyOneAddress_false" => __("Display multiple addresses on map", Plugin::DOMAIN),
					"selectPost" => __("Select post (optional)", Plugin::DOMAIN),
					"selectPost_description" => __("Show address of another post.", Plugin::DOMAIN),
					"selectTaxonomy" => __("Taxonomy", Plugin::DOMAIN),
					"setTerms" => __("Terms (optional)", Plugin::DOMAIN),
					"setTerms_description" => __("Coma separated list of term slugs of the selected taxonomy.", Plugin::DOMAIN),
				]
			]
		);

		$this->helper->registerStyle(
			Plugin::HANDLE_CSS_GUTENBERG,
			"/assets/gutenberg.css",
		);
		wp_enqueue_style( Plugin::HANDLE_CSS_GUTENBERG );

	}

}