<?php
/**
 * Created by PhpStorm.
 * User: edward
 * Date: 11.08.16
 * Time: 16:09
 */

namespace Geolocations;


use Geolocations\Model\Location;

class Shortcode extends Components\Component {

	/**
	 * shortcode tag
	 */
	const SHORTCODE = "geolocations_map";

	private $rendered_map = 0;

	public function onCreate() {
		$this->places = NULL;

		add_shortcode(self::SHORTCODE, array($this, "shortcode"));

		add_action('admin_print_footer_scripts', array(
			$this,
			'add_text_editor_button',
		));

		add_filter('mce_buttons_2', array($this, 'add_tinymce_button'));
		add_filter('mce_external_plugins', array(
			$this,
			'add_tinymce_plugin',
		));

		//		add_filter('tiny_mce_before_init', array($this, 'tiny_mce_config') );
		add_filter('mce_css', array($this, 'tiny_mce_config'));

		add_action('wp_ajax_geolocations_data_script', array(
			$this,
			"data_script",
		));
	}

	/**
	 * inject editor css
	 *
	 * @param $initArray
	 *
	 * @return mixed
	 */
	public function tiny_mce_config($url) {
		if (!empty($url)) {
			$url .= ',';
		}
		$url .= $this->plugin->url . '/css/tinymce-editor.css';

		return $url;
	}

	/**
	 * adds a button to plaintext editor
	 */
	public function add_text_editor_button() {
		?>
		<script type="text/javascript">
			if (typeof QTags != 'undefined') {
				QTags.addButton('geolocations', 'Geolocations',
					'[<?php echo self::SHORTCODE; ?> single="false"]');
			}
		</script>
		<?php
	}

	/**
	 * add button to tinymce
	 */
	public function add_tinymce_button($buttons) {
		wp_enqueue_style('dashicons');
		if ($buttons[count($buttons) - 1] == "wp_help") {
			array_splice($buttons, count($buttons) - 1, 0, "geolocations");
		}
		else {
			array_push($buttons, 'geolocations');
		}

		return $buttons;
	}

	/**
	 * add tinymce plugin js
	 */
	public function add_tinymce_plugin($plugins_array) {
		/**
		 * style for dialog
		 */
		wp_enqueue_style('jquery-ui-styles');
		wp_enqueue_style(
		        "geolocations",
                $this->plugin->url . '/assets/tinymce-plugin.css',
                array(),
                filemtime( $this->plugin->path . "/assets/tinymce-plugin.css")
        );

		/**
		 * style for dialog
		 */
		wp_enqueue_script('jquery');
		wp_enqueue_script('jquery-ui-autocomplete');
		wp_enqueue_script(
		        "geolocations_data",
                '/wp-admin/admin-ajax.php?action=geolocations_data_script',
                array('jquery-ui-autocomplete'),
                1,
                'all'
        );

		/**
		 * add plugin js
		 */
		$plugins_array['geolocations'] = $this->plugin->url . 'assets/tinymce-plugin.js';

		return $plugins_array;
	}


	/**
	 * render shortcode
	 *
	 * @param $atts
	 *
	 * @return string
	 */
	public function shortcode($atts) {

		global $post;
		$original_atts = $atts;
		$atts          = shortcode_atts(array(
			/**
			 * only display post in context
			 */
			'single'         => false,

			/**
			 * show an single address content
			 */
			'id'             => NULL,

			/**
			 * hide elements
			 */
			'hide_list'      => false,
			'hide_search'    => false,
			'hide_filer'     => false,

			/**
			 * wp query arguments
			 */
			'posts_per_page' => NULL,
			'post_type'      => NULL,
		), $atts, self::SHORTCODE);

		/**
		 * show all as default
		 */
		$args = array(
			"posts_per_page" => -1,
			"post_type"      => "any",
			"orderby" => "title",
			"order" => "ASC",
		);

		/**
		 * check atts
		 */
		if ($atts['single'] === true || $atts["single"] === "true") {
			/**
			 * if is single look for id
			 */
			if ($atts['id'] != NULL) {
				/**
				 * if there is an id get the id address
				 */
				$args = array(
					"p"              => $atts['id'],
					"posts_per_page" => 1,
				);
			}
			else {
				/**
				 * else show this post context map
				 */
				$args = array(
					"p"              => $post->ID,
					"posts_per_page" => 1,
				);
			}
		}
		else {
			/**
			 * if not single build query
			 */
			/**
			 * limit to an spezific count
			 */
			if (!empty($atts['posts_per_page'])) {
				$args['posts_per_page'] = $atts['posts_per_page'];
			}
			/**
			 * only a specific post type
			 */
			if (!empty($atts['post_type'])) {
				$args['post_type'] = $atts['post_type'];
			}

			/**
			 * build tax query
			 */
			$tax_query = array();
			foreach ($original_atts as $name => $att) {
				if (strpos($name, "tax_") === 0) {
					$tax = str_replace("tax_", "", $name);
					if (strpos($att, ",") !== false) {
						$att = explode(",", str_replace(" ", "", $att));
					}
					$tax_query[] = array(
						'taxonomy' => $tax,
						'field'    => 'slug',
						'terms'    => $att,
					);
				}
			}
			/**
			 * if there are tax add to query
			 */
			if (count($tax_query) > 0) {
				$args['tax_query'] = $tax_query;
			}
		}

		/**
		 * build the geolocations query
		 */
		$query = new GeolocationsQuery($args);

		/**
		 * javascript options
		 */
		$hide_list = "false";
		if ($atts["hide_list"] === true || $atts["hide_list"] === "true") {
			$hide_list = "true";
		}

		$hide_search = "false";
		if ($atts["hide_search"] === true || $atts["hide_search"] === "true") {
			$hide_search = "true";
		}

		$hide_filter = "false";
		if (isset($atts["hide_filter"]) && ($atts["hide_filter"] === true || $atts["hide_filter"] === "true")) {
			$hide_filter = "true";
		}

		/**
		 * no geolocations no output
		 */
		if (!$query->have_geolocations()) {
		    wp_reset_postdata();
			return "";
		}


		if (
			$this->places == NULL
			&& !empty($_GET[Plugin::getSearchParam()])
			&& $this->plugin->maps_api != NULL
		) {
			$search = $_GET[Plugin::getSearchParam()];
			$places = $this->plugin->maps_api->getPlacesByAddress(apply_filters(Plugin::FILTER_SEARCH_VALUE, $search));
			if (!empty($places) && !empty($places->status) && $places->status == "OK" && is_array($places->results)) {
				$this->places = $places->results;
			}
		}

		$this->rendered_map++;


		/**
		 * else build map
		 */
		$this->plugin->assets->enqueueFrontend();
		ob_start();

		?>
		<!--
		geolocations-app
		-->
		<div id="geolocations__root-<?php echo $this->rendered_map; ?>" class="rs_skip"></div>
		<script type="text/javascript">
			window.geolocation_places = <?php echo ($this->places != NULL) ? json_encode($this->places) : "''" ?>;
			window.geolocations_data = (window.geolocations_data) ?
				window.geolocations_data :
				{};
			window.geolocations_data['<?php echo $this->rendered_map; ?>'] = {
				hide_list: <?php echo $hide_list; ?>,
				hide_search: <?php echo $hide_search; ?>,
				hide_filter: <?php echo $hide_filter; ?>,
				data: [],
			};
		</script>

		<ul id="gelocations-posts-list-<?php echo $this->rendered_map; ?>"
		    class="geolocations-posts-list">
			<?php
			while ($query->have_geolocations()) {

				$geolocation = $query->get_the_geolocation();
				$post        = $geolocation->getPost();

				/**
				 * @var Location
				 */
				$loc    = $post->geolocation;
				$coords = $loc->getGeocoding();

				$find    = array("&#8211;", "&#8222;", "&#8220;");
				$replace = array("-", "„", "“");

				$item = (object)array(
					"id" => get_the_ID(),
					"permalink" => get_the_permalink(),
					"lat" => $coords->lat,
					"lng" => $coords->lng,
					"title" => str_replace($find, $replace, get_the_title()),
					"address" => $geolocation->getAddress(),
					"phone" => $geolocation->getPhone(),
					"fax" => $geolocation->getFax(),
					"mail" => $geolocation->getEMail(),
					"url" => $geolocation->getURL(),
					"func" => $geolocation->getFunction(),
					"type" => $geolocation->getType(),
					"marker_icon" => Plugin::getMarkerIcon($geolocation)
 				);

				$item = apply_filters(Plugin::FILTER_JS_ITEM_DATA_ALTER, $item, $geolocation);

				?>
				<script type="text/javascript">
					window.geolocations_data['<?php echo $this->rendered_map; ?>'].data.push(<?php echo json_encode($item) ?>);
				</script>

				<li class="geolocations-post-item">
<!--					<h2>--><?php //$item->title; ?><!--</h2>-->
<!--					<p>--><?php //echo $item->address ?><!--<br>-->
<!--						Mail: --><?php //echo $item->mail; ?><!--<br>-->
<!--						Fax: --><?php //echo $item->fax; ?>
<!--                    </p>-->

                    <div itemscope itemtype="http://schema.org/Organization">
                        <span itemprop="name"><?php echo str_replace($find, $replace, get_the_title()); ?></span>
                        Contact Details:
                        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                            Main address:
                            <span itemprop="streetAddress"><?php echo $geolocation->get("street"); ?> <?php echo $geolocation->get("number"); ?></span>
                            <span itemprop="postalCode"><?php echo $geolocation->get("zip"); ?></span>
                            <span itemprop="addressLocality"> <?php echo $geolocation->get("city"); ?></span>
                        </div>
                        Tel: <span itemprop="telephone"><?php echo $geolocation->get("telephone"); ?> </span>,
                        Fax: <span itemprop="faxNumber"><?php echo $geolocation->get("fax"); ?> </span>,
                        E-mail: <span itemprop="email"><?php echo $geolocation->get("email"); ?></span>
                        URL: <span itemprop="url"><?php echo $geolocation->get("url"); ?></span>

                    </div>

				</li>
				<?php
			}
			wp_reset_postdata();
			?>
		</ul>
		<!-- geolocations-app -->
		<?php

		$content = ob_get_contents();
		ob_end_clean();

		return $content;
	}

	/**
	 * javascript data for postqueue tinymce plugin
	 */
	public function data_script() {
		header('Content-Type: application/javascript');

		/**
		 * available taxonomies
		 */
		$items = array();
		$taxs  = get_taxonomies(array(
			'public' => true,
		), 'objects');
		foreach ($taxs as $tax) {
			$items[] = array(
				"text"  => $tax->labels->name,
				"value" => $tax->name,
			);
		}

		/**
		 * in english please, translation comes later
		 */
		$texts = array(
			'title'            => __('Geolocation', 'geolocations'),
			"single_label"     => __('Single address?', 'geolocations'),
			'single_text'      => __('Only one location will be displayed.', 'geolocations'),
			'taxonomy'         => __('Taxonomy', 'geolocations'),
			'taxonomy_tooltip' => __('Of which taxonomy are the following terms?', 'geolocations'),
			'terms'            => __('Terms', 'geolocations'),
			'terms_tooltip'    => __('Coma separated list of term slugs of the taxonomy above.', 'geolocations'),
			'address_label'    => __('Address (optional)', 'geolocations'),
			'address_tooltip'  => __('Display the address from another content. If empty the own address data will be used.', 'geolocations'),
		);

		?>
		window.geolocations = {
		shortcode: '<?php echo self::SHORTCODE ?>',
		taxonomies: <?php echo \json_encode($items); ?>,
		text:{
		<?php
		/**
		 * translate strings for js
		 */
		foreach ($texts as $key => $text) {
			echo "{$key} : '{$text}',";
		}
		?>
		},
		};
		<?php
		die();
	}

}