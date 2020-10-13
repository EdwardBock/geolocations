<?php

namespace Geolocations;

/**
 * Plugin Name: Geolocations
 * Plugin URI: https://github.com/EdwardBock/geolocations
 * Description: Geolocation management for contents
 * Version: 1.1
 * Author: Palasthotel <rezeption@palasthotel.de> (in person: Edward Bock, Benjamin Birkenhake)
 * Author URI: http://www.palasthotel.de
 * Requires at least: 4.0
 * Tested up to: 4.5.3
 * Text Domain:       geolocations
 * License: http://www.gnu.org/licenses/gpl-2.0.html GPLv2
 * @copyright Copyright (c) 2020, Palasthotel
 * @package Palasthotel\Geolocations
 *
 */

/**
 * Class Plugin
 * @property Ajax ajax
 * @property string $path
 * @property string $url
 * @property MapAPI maps_api
 * @property Shortcode shortcode
 * @property Post post
 * @property Settings settings
 * @property MetaBox metaBox
 * @property Migrate migrate
 * @property Grid grid
 * @property Assets assets
 * @property Gutenberg gutenberg
 * @property REST_API rest
 */
class Plugin {

	const DOMAIN = "geolocations";

	const OPTION_GOOGLE_API_KEY = "geolocations_google_api_key";
	
	const FILTER_SEARCH_VALUE = "geolocations_search_value";
	const FILTER_MARKER_ICON = "geolocations_marker_icon";
	const FILTER_LOCATION_TYPES = "geolocations_types";
	const FILTER_LOCATION_FIELDS = "geolocations_fields";
	const FILTER_LOCATION_FIELD_NAME = "geolocations_field_name";
	const FILTER_SEARCH_PARAM = "geolocations_search_param";
	const FILTER_ADMIN_AJAX_QUERY_ARGS = "geolocations_admin_ajax_query_args";

	const FILTER_JS_ITEM_DATA_ALTER = "geolocations_js_item_data_alter";

	const REST_FIELD_GEOLOCATION = "geolocation";

	const HANDLE_JS_GUTENBERG = "geolocations_gutenberg";
	const HANDLE_JS_FRONTEND = "geolocations_frontend";
	const HANDLE_CSS_FRONTEND = "geolocations_frontend";
	const HANDLE_JS_MAPS_API = "geolocations_maps_api";
	const HANDLE_JS_META_BOX = "geolocations_meta_box";
	const HANDLE_CSS_META_BOX = "geolocations_meta_box";
	
	/**
	 * construct geolocations plugin
	 */
	private function __construct(){

		require_once dirname(__FILE__)."/vendor/autoload.php";

		/**
		 * base paths
		 */
		$this->path = plugin_dir_path(__FILE__);
		$this->url  = plugin_dir_url(__FILE__);
		
		/**
		 * load translations
		 */
		load_plugin_textdomain(
			self::DOMAIN,
			false,
			dirname( plugin_basename( __FILE__ ) ) . '/languages'
		);

		$this->assets = new Assets($this);
		$this->ajax = new Ajax($this);
		$this->rest = new REST_API($this);
		$this->maps_api = new MapAPI($this);
		$this->shortcode = new Shortcode($this);
		$this->post = new Post($this);
		$this->settings = new Settings($this);
		$this->metaBox = new MetaBox($this);
		$this->gutenberg = new Gutenberg($this);
		$this->migrate = new Migrate($this);
		$this->grid = new Grid($this);
		
	}

	private static $instance;
	static function instance(){
		if(self::$instance == null){
			self::$instance = new static();
		}
		return self::$instance;
	}
	
	/**
	 * get all geolocation types
	 * @return mixed
	 */
	static function getTypes(){
		$types = array(
			array(
				"slug" => "",
				"label" => __("- No Type -",'geolocations'),
			)
		);
		return apply_filters(self::FILTER_LOCATION_TYPES, $types);
	}

	/**
	 * @param GeolocationPost $geo_post
	 *
	 * @return mixed
	 */
	static function getMarkerIcon(GeolocationPost $geo_post){
		$icon = array();
		return apply_filters(self::FILTER_MARKER_ICON, $icon, $geo_post);
	}

	/**
	 * @return mixed
	 */
	static function getSearchParam(){
		return apply_filters(self::FILTER_SEARCH_PARAM,__("zip", 'geolocations'));
	}
}

Plugin::instance();