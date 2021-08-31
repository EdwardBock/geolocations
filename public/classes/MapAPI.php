<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 25.07.16
 * Time: 13:07
 */

namespace Geolocations;


use Geolocations\Model\Location;

class MapAPI extends Components\Component {
	private $url_base = "https://maps.googleapis.com/";
	private $feature_geocoding = "maps/api/geocode/json?";

	/**
	 * @param Location $location
	 *
	 * @return {lat,lng} | null
	 */
	public function getPlaces(Location $location){
		if(empty($location->getStreet()) && empty($location->getCity()) && empty($location->getZIP())){
			return null;
		}
		$address = $location->getStreet()." ".$location->getNumber().", ".$location->getZIP()." ".$location->getCity();
		$result = $this->getPlacesByAddress($address);
		if(empty($result->results)) return null;
		try{
			$lat = $result->results[0]->geometry->location->lat;
			$lng = $result->results[0]->geometry->location->lng;
			if($lat == null || $lng == null) return null;
			return (object) array(
				"lat" => $lat,
				"lng" => $lng
			);
		} catch (\Exception $e){
			return null;
		}
	}
	
	/**
	 * @param $address
	 *
	 * @return null|object
	 */
	public function getPlacesByAddress($address){
		$request_url = $this->url_base.$this->feature_geocoding."address=".urlencode($address)."&key=".$this->plugin->settings->getApiKey();
		$response = wp_remote_get($request_url);
		if(is_wp_error($response)){
			return null;
		}
		return json_decode($response["body"]);
		
	}
}