<?php


namespace Geolocations\Service;


use Geolocations\Plugin;
use Palasthotel\WordPress\Service\ProviderInterface;

class PostTypesProvider implements ProviderInterface {

	public function get(): array {
		return Plugin::instance()->settings->getEnabledPostTypes();

	}

}