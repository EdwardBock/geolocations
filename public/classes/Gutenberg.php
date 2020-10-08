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
					'type' => 'string',
				)
			),
			'render_callback' => array( $this, 'render_address_block' )
		) );

	}

	public function render_address_block($attributes, $content ){

		$isEditor = ( defined( 'REST_REQUEST' ) && REST_REQUEST == true );

		if($isEditor){


			if(isset($attributes["single"]) && $attributes["single"]){
				$location = null;
				if(isset($attributes["post_id"]) && $attributes["post_id"] > 0){
					$location = new Location($attributes["post_id"]);
				} else {
					$location = new Location(get_the_ID());
				}

				$geo = $location->getGeocoding();
				if(empty($geo->lat) || empty($geo->lng)){
					return "No address found";
				}

				// https://developers.google.com/maps/documentation/maps-static/start
				$src = "https://maps.googleapis.com/maps/api/staticmap?size=600x400";
//				$src.= "&center=".$geo->lat.",".$geo->lng;
				$src.= "&markers=$geo->lat,$geo->lng";
				$src.= "&zoom=13";
				$src.= "&key=".$this->plugin->settings->getApiKey();

				return "<img src='$src' />";
			}


			return '<div class="multiple"><span class="dashicons dashicons-location-alt"></span></div>';


		}

		return "Render it!";
	}

}