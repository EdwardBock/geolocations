<?php


namespace Geolocations;

use Geolocations\Model\Location;
use WP_Query;

class GeolocationsQuery {
	/**
	 * @var WP_Query
	 */
	private $wp_query;

	/**
	 * Geo_Query constructor.
	 *
	 * @param array $args
	 */
	public function __construct(array $args = array()) {
		/**
		 * default query args
		 */
		$defaults = array(
			"post_type" => "any",
			'meta_query' => array(
				array(
					'key' => Location::getMetaFieldName(Location::GEOCODING_RESULT_LNG),
					'value' => '',
					'compare' => '!='
				),

				array(
					'key' => Location::getMetaFieldName(Location::GEOCODING_RESULT_LAT),
					'value' => '',
					'compare' => '!='
				),
				array(
					'key' => Location::getMetaFieldName(Location::GEOCODING_RESULT_LNG),
					'value' => 'null',
					'compare' => '!='
				),
				array(
					'key' => Location::getMetaFieldName(Location::GEOCODING_RESULT_LAT),
					'value' => 'null',
					'compare' => '!='
				),
				array(
					'key' => Location::getMetaFieldName(Location::GEOCODING_RESULT_LNG),
					'compare' => 'EXISTS',
				),
				array(
					'key' => Location::getMetaFieldName(Location::GEOCODING_RESULT_LAT),
					'compare' => 'EXISTS',
				),
			)
		);

		/**
		 * get all posts
		 */
		$this->wp_query = new WP_Query( array_merge($defaults, $args) );
	}

	/**
	 * @return WP_Query
	 */
	public function getWPQuery(){
		return $this->wp_query;
	}

	/**
	 * if there is a next post in query
	 */
	public function have_geolocations(){
		return $this->wp_query->have_posts();
	}

	/**
	 *
	 */
	public function get_the_geolocation(){
		$this->wp_query->the_post();
		global $post;
		return new GeolocationPost($post);
	}

	/**
	 * to set all to normal again
	 */
	public function reset_postdata(){
		$this->wp_query->reset_postdata();
	}

	/**
	 * return a json object representation of query result
	 * @return array
	 */
	public function toJSON(){
		$json = array();
		return $json;
	}
}
