<?php


namespace Geolocations;


use Geolocations\Model\Location;

class Assets extends _Component {

	/**
	 * enqueue for frontend
	 */
	public function enqueueFrontend() {
		wp_enqueue_script(
			Plugin::HANDLE_JS_MAPS_API,
			"https://maps.googleapis.com/maps/api/js?key=".$this->plugin->settings->getApiKey()."&libraries=places"
		);
		wp_enqueue_script(
			Plugin::HANDLE_JS_FRONTEND,
			$this->plugin->url . "/js/frontend.js",
			[ "react", "react-dom", 'underscore', Plugin::HANDLE_JS_MAPS_API ],
			filemtime( $this->plugin->path . "/js/frontend.js" )
		);
		wp_localize_script(
			Plugin::HANDLE_CSS_FRONTEND,
			"Geolocations",
			[
				"api_key" => $this->plugin->settings->getApiKey(),
			]
		);

		wp_enqueue_style(
			Plugin::HANDLE_CSS_FRONTEND,
			$this->plugin->url . "/css/style.css",
			[],
			filemtime( $this->plugin->path . "/css/style.css" )
		);
	}

	/**
	 * enqueue for meta box
	 */
	public function enqueueMetaBoxJS() {
		wp_enqueue_script( 'jquery-ui-autocomplete' );
		wp_enqueue_script(
			Plugin::HANDLE_JS_META_BOX,
			$this->plugin->url . "/js/meta-box.js",
			array( 'jquery' ),
			filemtime( $this->plugin->path . "/js/meta-box.js" ),
			true
		);
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
		wp_enqueue_style(
			Plugin::HANDLE_CSS_META_BOX,
			$this->plugin->url . "/css/meta-box.css",
			[],
			filemtime( $this->plugin->path . "/css/meta-box.css" )
		);
	}

	/**
	 * enqueue for gutenberg
	 */
	public function enqueueGutenberg() {
		$info = include $this->plugin->path . "/js/gutenberg/geolocations.asset.php";
		wp_enqueue_script(
			Plugin::HANDLE_JS_GUTENBERG,
			$this->plugin->url . "/js/gutenberg/geolocations.js",
			$info["dependencies"],
			$info["version"]
		);

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

		wp_localize_script(
			Plugin::HANDLE_JS_GUTENBERG,
			"Geolocations",
			[
				"fields"       => $fieldsMap,
				"fieldPrefix" => Location::PREFIX,
			]
		);

	}

}