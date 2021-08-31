<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 15.08.16
 * Time: 13:56
 */

namespace Geolocations;


class Settings extends Components\Component {

	public function onCreate() {
		add_action( 'admin_menu', array( $this, 'add_menu_pages' ) );
		add_action( 'admin_init', array( $this, 'register_settings' ) );
	}
	
	/**
	 * register admin menu page for settings
	 */
	function add_menu_pages(){
		add_submenu_page(
			'options-general.php',
			__('Settings › Geolocations ', 'geolocations'),
			__('Geolocations', 'geolocations'),
			'manage_options',
			'geolocations_settings',
			array( $this, 'render_settings_form' )
		);
	}
	
	/**
	 * render settings form
	 */
	function render_settings_form() {
		?>
		<div class="wrap">
			<h2><?php _e('Geolocations Settings', 'geolocations'); ?></h2>
			<form method="post" action="options.php">
				<?php
				settings_fields( 'geolocations_settings' );
				do_settings_sections( 'geolocations_settings' );
				?>
				<?php submit_button(); ?>
			</form>
		</div>
		<?php
	}
	
	/**
	 * section
	 */
	function api_key_section(){
	    _e('We use google places to find coordinates for geolocations.', Plugin::DOMAIN);
	}
	function post_type_settings_section() {
		echo __('Which post types should have geolocations support?', 'geolocations');
	}
	
	/**
	 *
	 */
	function register_settings() {

	    add_settings_section(
	            'geolocations_google_api_key',
            __('Google API Key', Plugin::DOMAIN),
            [$this, 'api_key_section'],
            'geolocations_settings'
        );

		add_settings_field(
			Plugin::OPTION_GOOGLE_API_KEY,
			'Key',
			function(){
			    $value = $this->getApiKey();
			    echo "<input name='".Plugin::OPTION_GOOGLE_API_KEY."' value='$value'/>";
            },
			'geolocations_settings',
			'geolocations_google_api_key'
		);
		register_setting( 'geolocations_settings', Plugin::OPTION_GOOGLE_API_KEY );
		
		/**
		 * enabled post types
		 */
		add_settings_section(
			'geolocations_post_types',
			__('Post Types', 'geolocations'),
			array( $this, 'post_type_settings_section' ),
			'geolocations_settings'
		);
		
		$post_types = get_post_types( array('public' => true, 'show_ui' => true), 'objects' );
		
		foreach ( $post_types as $key => $post_type ) {
			add_settings_field(
				'geolocations_'.$key.'_enabled',
				$post_type->labels->name,
				array( $this, 'post_type_html' ),
				'geolocations_settings',
				'geolocations_post_types',
				array( 'type' => $key )
			);
			register_setting( 'geolocations_settings', 'geolocations_'.$key.'_enabled' );
		}
		
	}
	
	function post_type_html( $args ) {
		$posttype = $args['type'];
		$value = get_option( 'geolocations_'.$posttype.'_enabled', false );
		?>
		<input type="checkbox" id="geolocations_<?php echo $posttype?>_enabled" name="geolocations_<?php echo $posttype?>_enabled" <?php echo ( $value ? 'checked' : '' )?>> <?php echo ($value ? __("Enabled", 'geolocations'): __("Disabled",'geolocations') ) ?>
		<?php
	}
	
	public function isPostTypeEnabled($post_type){
		return get_option( 'geolocations_'.$post_type.'_enabled', false );
	}

	public function getEnabledPostTypes(){
		$post_types = get_post_types(array(), 'objects');
		$activeForPostTypes = [];
		foreach ($post_types as $key => $post_type) {
			if ( $this->plugin->settings->isPostTypeEnabled( $key ) ) {
				$activeForPostTypes[] = $key;
			}
		}
		return $activeForPostTypes;
	}

	public function getApiKey(){
	    return get_option(Plugin::OPTION_GOOGLE_API_KEY, "");
	}
	
}