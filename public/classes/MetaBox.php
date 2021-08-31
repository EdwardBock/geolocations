<?php

namespace Geolocations;

use Geolocations\Model\Location;

/**
 * @property Settings settings
 * @property MapAPI mapapi
 */
class MetaBox extends Components\Component {

	public function onCreate() {
		$this->settings = $this->plugin->settings;
		$this->mapapi   = $this->plugin->maps_api;
		add_action('save_post', array($this, 'save_post'));
		add_action('add_meta_boxes', array($this, 'add_meta_boxes'));
	}

	public function save_post($post_id) {
		$location = new Location($post_id);
		if (!empty($_POST[Location::PREFIX])) {

			/**
			 * save fields
			 */
			foreach ($_POST[Location::PREFIX] as $field => $value) {
				$location->save($field, $value);
			}

			/**
			 * get location coorinates
			 */
			$geo = $this->mapapi->getPlaces($location);
			if ($geo != NULL) {
				$location->saveGeocoding($geo);
			}
			else {
				$location->deleteGeocoding();
			}
		}
	}

	public function add_meta_boxes() {
	    if($this->plugin->gutenberg->isGutenberg()) return;
	    $postTypes = $this->settings->getEnabledPostTypes();

		$post_types = get_post_types(array(), 'objects');
		$need_js    = false;
		foreach ($post_types as $key => $post_type) {
			if ($this->settings->isPostTypeEnabled($key)) {
				$need_js = true;
				add_meta_box('geolocations', __('Geolocation', 'geolocations'), array(
				  $this,
				  'render_meta_box',
				), $key);
			}
		}
		add_meta_box('geolocations', __('Geolocation', 'geolocations'), array(
			$this,
			'render_meta_box',
		), $key);
		if ($need_js) {
			$this->plugin->assets->enqueueMetaBoxJS();
		}
	}

	function render_meta_box($post) {

		$location = new Location($post->ID);

		?>
        <div>
            <h3>Geocoding:</h3>
			<?php

			if ($location->hasGeocoding()) {
			    $coordinates = $location->getGeocoding();
			    $url = "https://www.google.de/maps/@{$coordinates->lat},{$coordinates->lng},12z";
				echo "<p><a href='$url' target='_blank'>"
                     . __('Latitude', 'geolocations') . ": " . $coordinates->lat . " " . __('Longiture', 'geolocations') . ": " . $coordinates->lng .
                     "</a></p>";
			} else {
				echo "<p style='font-weight: bold; color: #D32F2F'>" . __('No coordinates found. Please provide an address and save.', 'geolocations') . "</p>";
			}

			?>
        </div>
        <hr />
		<?php

		$fields = $location->getFields();
		$prefix = Location::PREFIX;

		foreach ($fields as $field) {
			if ($field == Location::GEOCODING_RESULT_LAT) {
				continue;
			}
			if ($field == Location::GEOCODING_RESULT_LNG) {
				continue;
			}
			if ($field == Location::FIELD_TYPE) {
				continue;
			}
			?>
			<div class="geolocations__address-field">
				<label for="meta-<?php echo $prefix . $field; ?>"><?php echo $this->get_label_for_field($field); ?></label><br/>
				<input
						name="<?php echo $prefix ?>[<?php echo $field; ?>]"
						data-geolocations-field="<?php echo $field; ?>"
						id="meta-<?php echo $prefix . $field; ?>"
						class="regular-text"
						type="text"
						size="40"
						value="<?php echo $location->get($field); ?>"
				/>
			</div>
			<?php
		}

		$type  = $location->get(Location::FIELD_TYPE);
		$types = Plugin::getTypes();

		if (count($types) > 0) {
			?>
			<div>
				<h3>Type</h3>
				<select name="<?php echo $prefix ?>[<?php echo Location::FIELD_TYPE; ?>]">
					<?php
					foreach ($types as $_type) {
						?>
						<option
								value="<?php echo $_type["slug"]; ?>"
						  <?php echo ($type == $_type["slug"]) ? "selected" : ""; ?>
						><?php echo $_type["label"]; ?></option>
						<?php
					}
					?>
				</select>
			</div>
			<?php
		}
	}

	/**
	 * get readable label from field slug
	 *
	 * @param $field
	 *
	 * @return string
	 */
	function get_label_for_field($field) {

		$name = "";
		$name = apply_filters(Plugin::FILTER_LOCATION_FIELD_NAME, $name, $field);
		if ("" != $name) {
			return $name;
		}

		switch ($field) {
			case "street":
				return __("Street", 'geolocations');
			case "number":
				return __("Number", 'geolocations');
			case "zip":
				return __("ZIP", 'geolocations');
			case "city":
				return __("City", 'geolocations');
			case "telephone":
				return __("Telephone", 'geolocations');
			case "fax":
				return __("FAX", 'geolocations');
			case "email":
				return __("eMail", 'geolocations');
			case "url":
				return __("Internet", 'geolocations');
			case "function":
				return __("Function", 'geolocations');
            case "gecoding_result_lat":
                return __("Latitude", Plugin::DOMAIN);
			case "gecoding_result_lng":
				return __("Longitude", Plugin::DOMAIN);
		}
		return __("No label found for ", 'geolocations') . $field;
	}
}