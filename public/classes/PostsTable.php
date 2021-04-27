<?php


namespace Geolocations;


use Geolocations\Model\Location;
use Geolocations\Service\PostTypesProvider;
use Palasthotel\WordPress\PostsTable\Column;

class PostsTable extends _Component {

	public function onCreate() {

		Column::build( "geolocation" )
		      ->label( "Geolocation" )
		      ->after( "title" )
		      ->postTypes( new PostTypesProvider() )
		      ->render( function ( $post_id ) {
		      	    $location = new Location($post_id);
		      	    if($location->hasGeocoding()){
			            $coordinates = $location->getGeocoding();
			            $url = "https://www.google.de/maps/@{$coordinates->lat},{$coordinates->lng},12z";
		      	    	echo "<a href='$url'>✅ <span class='dashicons dashicons-location-alt'></span></a>";
		            } else {
			            echo "🚨 <span class='dashicons dashicons-location-alt'></span>";
		            }
		      } );

	}

}