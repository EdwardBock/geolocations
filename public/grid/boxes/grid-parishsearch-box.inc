<?php

use Geolocations\Model\Plugin;

class grid_parishsearch_box extends grid_static_base_box {
	
	public function __construct(){
		parent::__construct();
		$this->content->path = "/geolocations";
	}
	
	public function type(){
		return 'parishsearch';
	}	
	 
	public function build($editmode) {
			
		if($editmode){
			return t("Pfarreisuche");
		} else {   
			$output = "";
			$output .= "<form method='get'>";
			$output .= "<input name='gs' type='text' placeholder='Postleitzahl oder Name ihrer Gemeinde'>";
			$output .= "<input type='submit' value='Ihre Pfarrei finden'>";
			$output .= "</form>";
			
			$this->content->search_param = Plugin::getSearchParam();
			return  $this->content;
			
		}
	}
	
	public function contentStructure() {
		$cs = parent::contentStructure();
		$cs[] = array(
			"key" => "path",
			"type" => "text",
			"label" => __("Absolute path to map page", Plugin::DOMAIN),
		);
		return $cs;
	}
	
}