<?php

namespace Geolocations;

use Geolocations\Model\Location;

class Post extends _Component {

	public function onCreate() {
		add_action('the_post',array($this, 'the_post'));
	}
	
	/**
	 * @param $post \WP_Post
	 */
	public function the_post(\WP_Post $post){
		$post->geolocation = new Location($post->ID);
	}
	
}