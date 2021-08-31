<?php

namespace Geolocations;


class Ajax extends Components\Component {

	function onCreate(){
		add_action('wp_ajax_geolocations_admin', array($this, 'admin_ajax'));
	}

	function admin_ajax(){

		$query = new GeolocationsQuery(
			apply_filters(
				Plugin::FILTER_ADMIN_AJAX_QUERY_ARGS,
				array(
					's' => $_GET['term'],
					'posts_per_page' => 10,
				)
			)
		);

		$locations = array();

		while ($query->have_geolocations()){
			$lpost = $query->get_the_geolocation();
			$locations[] = $this->get_result_json($lpost);
		}
		wp_reset_postdata();

		wp_send_json($locations);
		exit;
	}

	/**
	 * @param GeolocationPost $location
	 *
	 * @return array
	 *
	 */
	function get_result_json($location){


		$fields = array();
		foreach( $location->getLocation()->getFields() as $field){
			$fields[$field] = $location->getLocation()->get($field);
		}

		return array(
			"ID" => $location->getPost()->ID,
			"post_title" => $location->getPost()->post_title,
			"address" => $location->getAddress(),
			"values" => $fields,
		);
	}
}