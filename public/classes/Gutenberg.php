<?php


namespace Geolocations;


/**
 * @property boolean enqueuedGutenberg
 */
class Gutenberg extends _Component {

	public function onCreate() {
		$this->enqueuedGutenberg = false;
		add_action( 'enqueue_block_editor_assets', function () {
			// backend only
			$this->enqueuedGutenberg = true;
			$this->plugin->assets->enqueueGutenberg();
		} );
		add_action( 'enqueue_block_assets', function () {
			// frontend and backend
		} );
	}

	public function isGutenberg(){
		return $this->enqueuedGutenberg;
	}

}