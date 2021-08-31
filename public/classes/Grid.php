<?php


namespace Geolocations;


class Grid extends Components\Component {

	public function onCreate() {
		add_action("grid_load_classes", array($this, "grid_load_classes") );
	}

	public function grid_load_classes(){
		require_once $this->plugin->path . "/grid/boxes/grid-parishsearch-box.inc";
	}

}