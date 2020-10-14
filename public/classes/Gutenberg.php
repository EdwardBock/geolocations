<?php


namespace Geolocations;


use Geolocations\Model\Location;

/**
 * @property boolean enqueuedGutenberg
 */
class Gutenberg extends _Component {

	public function onCreate() {
		$this->enqueuedGutenberg = false;
		add_action('init', function(){
			$this->registerBlocks();
		});
		add_action( 'enqueue_block_editor_assets', function () {
			// backend only
			$this->enqueuedGutenberg = true;
			$this->plugin->assets->enqueueGutenberg();
		} );
		add_action( 'enqueue_block_assets', function () {
			// frontend and backend
		} );
	}

	public function isGutenberg(){
		return $this->enqueuedGutenberg;
	}

	public function registerBlocks(){
		register_block_type( 'geolocations/address', array(
			'attributes'      => array(
				'single' => array(
					'type' => 'boolean',
				),
				'post_id' => array(
					'type' => 'integer',
				),
				'taxonomy'     => array(
					'type' => 'string',
				),
				'terms'      => array(
					'type' => 'array',
					'items' => [
						'type' => 'string',
					],
				)
			),
			'render_callback' => array( $this, 'render_address_block' )
		) );
	}

	public function render_address_block($attributes, $content ){

		$isEditor = ( defined( 'REST_REQUEST' ) && REST_REQUEST == true );
		$single = isset($attributes["single"]) && $attributes["single"];
		$post_id = isset($attributes["post_id"]) && $attributes["post_id"] > 0 ? $attributes["post_id"] : get_the_ID();
		$taxonomy = isset($attributes["taxonomy"]) && !empty($attributes["taxonomy"]) ? $attributes["taxonomy"]: false;
		$terms = isset($attributes["terms"]) && !empty($attributes["terms"]) ? $attributes["terms"] : false;
		$terms = is_string($terms) ? explode(",", $terms) : $terms;
		$terms = is_array($terms) ? array_map(function($term){ return str_replace(" ", "", $term); }, $terms) : $terms;

		if($isEditor){

			$args = array(
				"posts_per_page" => 750, // max length so we dont exceed the url max limit for curl
				"post_type"      => "any",
			);

			if($single){
				$args["p"] = $post_id;
				$args["posts_per_page"] = 1;
			} else {
				if($taxonomy && $terms) {
					/**
					 * build tax query
					 */
					$tax_query = array();
					foreach ( $terms as $name ) {
						$tax_query[] = array(
							'taxonomy' => $taxonomy,
							'field'    => 'slug',
							'terms'    => str_replace( " ", "", $name ),
						);

					}
					/**
					 * if there are tax add to query
					 */
					if ( count( $tax_query ) > 0 ) {
						$args['tax_query'] = $tax_query;
					}
				}
			}

			$query = new GeolocationsQuery($args);
			$markers = [];
			while ($query->have_geolocations()) {
				$geolocation = $query->get_the_geolocation();
				$geo = $geolocation->getLocation()->getGeocoding();
				if(!empty($geo->lat) && !empty($geo->lng)){
					$markers[] = "$geo->lat,$geo->lng";
				}

			}

			if(count($markers) < 1){
				return "<p>".__("No addresses found", Plugin::DOMAIN)."</p>";
			}

			// https://developers.google.com/maps/documentation/maps-static/start
			$src = "https://maps.googleapis.com/maps/api/staticmap?size=600x400";

			if(count($markers) < 2) $src.= "&zoom=13";

			$markers = implode("|",$markers);
			$src.= "&markers=$markers";

			$src.= "&key=".$this->plugin->settings->getApiKey();

			return "<img src='$src' />";
		}


		$tax = "";
		$id = "";
		if($single && $post_id > 0){
			$id = "id='$post_id'";
		} else if($terms && $taxonomy){
			$tax = "tax_$taxonomy='".implode(",",$terms)."'";
		}

		$single = $single ? "single='true'": "single='false'";

		// TODO: implement other options
		// posts_per_page
		// post_type
		// hide_list
		// hide_search
		// hide_filter

		return "[geolocations_map $single $id $tax]";

	}

}