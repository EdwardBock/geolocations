<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 20.10.16
 * Time: 11:04
 */

namespace Geolocations;


use Geolocations\Model\Location;

/**
 * @property MapAPI mapapi
 */
class Migrate extends Components\Component {
	
	/**
	 * migration prefix
	 */
	const PREFIX = "geolocation:";
	const OPTION_LOG = "geolocations_migration_log";

	function onCreate() {
		$this->mapapi = $this->plugin->maps_api;
		add_action( 'ph_migrate_register_field_handlers',array($this,'handler_register') );
		add_action('delete_post', array($this, 'delete_post'));
	}
	
	/**
	 * registeres handler for content relations
	 *
	 */
	function handler_register()
	{
		ph_migrate_register_field_handler( 'ph_post_destination',Migrate::PREFIX, 'Geolocations\migration_handler' );
	}
	
	/**
	 * returns field mapping of field with prefix
	 * @param $geolocation_field
	 *
	 * @return string
	 */
	public static function getFieldMapping($geolocation_field){
		return self::PREFIX.Location::getMetaFieldName($geolocation_field);
	}
	
	/**
	 * delte protocoll if delted (rollback)
	 * @param $post_id
	 */
	function delete_post($post_id){
		$logs = get_option(self::OPTION_LOG, array());
		$new_logs = array();
		foreach ($logs as $log){
			if( isset($logs["post_id"]) && $logs["post_id"] == $post_id) continue;
			$new_logs[] = $log;
		}
		update_option(self::OPTION_LOG, $new_logs);
	}
	
	/**
	 * logging on migration
	 * @param $message
	 * @param $post_id
	 */
	public static function log($message, $post_id){
		echo "Log: $message -> $post_id \n";
		$logs = get_option(self::OPTION_LOG, array());
		$logs[] = array(
			"message" => $message,
			"post_id" => $post_id,
		);
		update_option(self::OPTION_LOG, $logs);
	}
}


/**
 * function that handles the migrate process
 * @param  $post array with post details
 * @param  $fields array with migration data (content_relation:types, content_relations:targets)
 *
 */
function migration_handler($post, $fields)
{
	$geolocations = Plugin::instance();
	$post_id = $post['ID'];
	
	if($geolocations->maps_api == null){
		Migrate::log("Could not find Maps API", $post_id);
		return;
	}
	
	/**
	 * get values
	 */
	$street = $fields[Migrate::getFieldMapping(Location::FIELD_STREET)];
	$zip = $fields[Migrate::getFieldMapping(Location::FIELD_ZIP)];
	$city = $fields[Migrate::getFieldMapping(Location::FIELD_CITY)];
	$tel = $fields[Migrate::getFieldMapping(Location::FIELD_TELEPHONE)];
	$fax = $fields[Migrate::getFieldMapping(Location::FIELD_FAX)];
	$url = $fields[Migrate::getFieldMapping(Location::FIELD_URL)];
	$email = $fields[Migrate::getFieldMapping(Location::FIELD_EMAIL)];
	if(!empty($fields[Migrate::getFieldMapping(Location::FIELD_TYPE)])) {
        $type = $fields[Migrate::getFieldMapping(Location::FIELD_TYPE)];
    }
	if(!empty($fields[Migrate::getFieldMapping(Location::FIELD_FUNCTION)])) {
        $function = $fields[Migrate::getFieldMapping(Location::FIELD_FUNCTION)];
    }

	if(!empty($fields[Migrate::getFieldMapping(Location::GEOCODING_RESULT_LAT)]) && !empty($fields[Migrate::getFieldMapping(Location::GEOCODING_RESULT_LNG)])){
		$lat = $fields[Migrate::getFieldMapping(Location::GEOCODING_RESULT_LAT)];
		$lng = $fields[Migrate::getFieldMapping(Location::GEOCODING_RESULT_LNG)];
	}
	
	
	
	$location = new Location($post_id);
	
	/**
	 * save fields
	 */
	$location->save(Location::FIELD_STREET,$street);
	$location->save(Location::FIELD_ZIP,$zip);
	$location->save(Location::FIELD_CITY,$city);
	$location->save(Location::FIELD_TELEPHONE,$tel);
	$location->save(Location::FIELD_FAX,$fax);
	$location->save(Location::FIELD_URL,$url);
	$location->save(Location::FIELD_EMAIL,$email);
	if(!empty($type)) {
        $location->save(Location::FIELD_TYPE,$type);
    }
	if(!empty($function)) {
        $location->save(Location::FIELD_FUNCTION,$function);
    }

	
	if(!empty($lat) && !empty($lng)){
		$location->saveGeocoding((object)array(
			"lat"=> $lat,
			"lng" => $lng,
		));
	} else {
		$geo = $geolocations->maps_api->getPlaces($location);
		if($geo != null){
			$location->saveGeocoding($geo);
			echo "Found Geolocation for ID: $post_id \n";
		} else {
			Migrate::log("Could not find a location!", $post_id);
		}
	}
	
	
	
}