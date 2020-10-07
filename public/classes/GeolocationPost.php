<?php

namespace Geolocations;

use Geolocations\Model\Location;
use WP_Post;

class GeolocationPost{
	/**
	 * @var WP_Post
	 */
	private $post;
	
	/**
	 * @var Location
	 */
	private $location;
	
	/**
	 * Geo_Post constructor.
	 *
	 * @param WP_Post $post
	 */
	public function __construct( WP_Post $post) {
		$this->post = $post;
		$this->location = $post->geolocation;
	}

	public function get($fieldname){
		return $this->location->get($fieldname);
	}
	
	public function getPost(){
		return $this->post;
	}
	
	public function getAddress(){
		/**
		 * @var Location
		 */
		$loc = $this->location;
		
		$street = $loc->get(Location::FIELD_STREET);
		$number = $loc->get(Location::FIELD_NUMBER);
		$zip = $loc->get(Location::FIELD_ZIP);
		$city = $loc->get(Location::FIELD_CITY);
		
		if($street == "" && $number == ""){
			return "$zip $city";
		}
		return "$street $number, $zip $city";
	}
	
	public function getEMail(){
		return $this->location->get(Location::FIELD_EMAIL);
	}
	
	public function getPhone(){
		return $this->location->get(Location::FIELD_TELEPHONE);
	}
	
	public function getFax(){
		return $this->location->get(Location::FIELD_FAX);
	}
	
	public function getURL(){
		return $this->location->get(Location::FIELD_URL);
	}
	
	public function getFunction(){
		return $this->location->get(Location::FIELD_FUNCTION);
	}
	
	public function getType(){
		$slug = $this->location->get(Location::FIELD_TYPE);
		$types = Plugin::getTypes();
		foreach($types as $type){
			if($type["slug"] == $slug) return $type;
		}
		return array(
			"slug"=>"",
			"type"=> "",
		);
	}
	public function getLocation(){
		return $this->location;
	}
}
