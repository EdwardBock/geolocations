<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 25.07.16
 * Time: 12:44
 */

namespace Geolocations;


class Areas extends _Component {

	public function onCreate() {
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
	}
	
	/**
	 * register admin menu page for settings
	 */
	function admin_menu(){
		add_submenu_page( 'tools.php',
			__('Geolocations ‹ Areas', 'geolocations'),
			__('Geolocations Areas', 'geolocations'),
			'manage_options',
			'geolocations_areas',
			array( $this, 'render_areas_editor' )
		);
	}
	
	function render_areas_editor(){
		?>
		<h1>Areas Editor</h1>
		<div id="geolocations-areas-editor"></div>
		<script src="<?php echo $this->plugin->url; ?>/js/backend.js"></script>
		<?php
	}
	
}