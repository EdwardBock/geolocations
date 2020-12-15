<?php

namespace Geolocations\Model;


use Geolocations\Plugin;

class Location {
	
	/**
	 * post id for location
	 * @var integer
	 */
	public $post_id;
	
	/**
	 * fields array
	 */
	private $fields;
	
	/**
	 * list of available fields
	 * @var string
	 */
	const FIELD_STREET = "street";
	const FIELD_NUMBER	= "number";
	const FIELD_ZIP = "zip";
	const FIELD_CITY = "city";
	const FIELD_TELEPHONE = "telephone";
	const FIELD_FAX = "fax";
	const FIELD_EMAIL = "email";
	const FIELD_TYPE = "type";
	const FIELD_URL = "url";
	const FIELD_FUNCTION = "function";
	
	const GEOCODING_RESULT_LAT = "gecoding_result_lat";
	const GEOCODING_RESULT_LNG = "gecoding_result_lng";
	
	/**
	 * prefix for post meta keys
	 * @var string
	 */
	const PREFIX = "_geolocations_";
	
	/**
	 * Location constructor.
	 *
	 * @param $post_id
	 */
	public function __construct($post_id) {
		$this->post_id = $post_id;
		$this->fields = array();
		$this->fields[] = self::FIELD_STREET;
		$this->fields[] = self::FIELD_NUMBER;
		$this->fields[] = self::FIELD_ZIP;
		$this->fields[] = self::FIELD_CITY;
		$this->fields[] = self::FIELD_FUNCTION;
		$this->fields[] = self::FIELD_TELEPHONE;
		$this->fields[] = self::FIELD_FAX;
		$this->fields[] = self::FIELD_EMAIL;
		$this->fields[] = self::FIELD_TYPE;
		$this->fields[] = self::FIELD_URL;
		$this->fields[] = self::GEOCODING_RESULT_LAT;
		$this->fields[] = self::GEOCODING_RESULT_LNG;
		
	}
	
	/**
	 * @param $field
	 *
	 * @return string
	 */
	public static function getMetaFieldName( $field ) {
		return self::PREFIX.$field;
	}
	
	/**
	 * save field value
	 * @param $field
	 * @param $value
	 */
	public function save($field, $value){
		$this->validateField($field);
		update_post_meta($this->post_id, self::getMetaFieldName($field), $value);
	}
	
	/**
	 *
	 * get field value
	 *
	 * @param $field
	 *
	 * @return mixed
	 */
	public function get($field){
		$this->validateField($field);
		return get_post_meta($this->post_id, self::getMetaFieldName($field), true);
	}
	
	/**
	 * get an array with available fields
	 * @return array
	 */
	public function getFields(){
		return apply_filters(Plugin::FILTER_LOCATION_FIELDS, $this->fields);
	}
	
	/**
	 * check if field ist valid or error
	 * @param $field
	 *
	 * @throws \Error
	 */
	private function validateField($field){
		if(!$this->validField($field)) throw new \Error("Not a valid location field: ".$field);
	}
	
	/**
	 * check for valid field
	 *
	 * @param $field
	 *
	 * @return bool
	 */
	private function validField($field){
	 	return in_array($field, $this->getFields());
	}
	
	/**
	 * check if adress is
	 * @return bool
	 */
	public function exists(){
		$field = $this->get(self::FIELD_STREET);
		
		return ($field != '');
	}
	
	/**
	 * geocoding
	 * @return {lat,lng} | null
	 */
	public function getGeocoding(){
		return (object)array(
			"lat" => $this->get(self::GEOCODING_RESULT_LAT),
			"lng" => $this->get(self::GEOCODING_RESULT_LNG),
		);
	}
	public function saveGeocoding($latlngobject){
		$this->save(self::GEOCODING_RESULT_LAT, $latlngobject->lat);
		$this->save(self::GEOCODING_RESULT_LNG, $latlngobject->lng);
	}
	public function deleteGeocoding(){
		$lat = delete_post_meta($this->post_id, self::getMetaFieldName(self::GEOCODING_RESULT_LAT));
		$lng = delete_post_meta($this->post_id, self::getMetaFieldName(self::GEOCODING_RESULT_LNG));
		return ($lat && $lng);
	}
	
	/**
	 * nice getter and setter
	 */
	public function getStreet(){
		return $this->get(self::FIELD_STREET);
	}
	public function getNumber(){
		return $this->get(self::FIELD_NUMBER);
	}
	public function getCity(){
		return $this->get(self::FIELD_CITY);
	}
	public function getZIP(){
		return $this->get(self::FIELD_ZIP);
	}
}