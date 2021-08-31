<?php


namespace Geolocations;

use Geolocations\Model\Location;
use WP_REST_Request;

/**
 * @property Plugin plugin
 */
class REST_API extends Components\Component {

	public function onCreate() {
		add_action('init', function (){
			$this->init_gutenberg();
		}, 99);
	}

	public function init_gutenberg(){

		register_rest_field(
			$this->plugin->settings->getEnabledPostTypes(),
			Plugin::REST_FIELD_GEOLOCATION,
			[
				'get_callback' => function($post){
					$postId = $post["id"];

					$location = new Location($postId);
					$result = [];
					foreach ($location->getFields() as $field){
						$result[$field] = $location->get($field);
					}

					return $result;
				},
				'update_callback' => function($value, $post){
					if($value) {
						$location = new Location($post->ID);
						foreach ($value as $field => $fieldValue){
							$location->save(sanitize_text_field($field), sanitize_text_field($fieldValue));
						}
						/**
						 * get location coorinates
						 */
						$geo = $this->plugin->maps_api->getPlaces($location);
						if ($geo != NULL) {
							$location->saveGeocoding($geo);
						} else {
							$location->deleteGeocoding();
						}
					}
				},
				'permission_callback' => [$this, 'can_edit_post_permission'],
				'schema' => array(
					'description' => "Geolocation",
					'type'        => 'object'
				),
			]
		);
	}

	/**
	 * @param WP_REST_Request $request
	 *
	 * @return bool
	 */
	public function can_edit_post_permission($request){
		$post_id = $request["id"];
		return current_user_can('edit_post', $post_id);
	}
}
