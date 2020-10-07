// ------------------------------
// custom document area panels
// ------------------------------
import { registerPlugin } from "@wordpress/plugins"
import { PluginDocumentSettingPanel } from '@wordpress/edit-post'
import GeolocationControl from "../components/GeolocationControl.js";


// ------------------------------------------
// extend documents panel
// ------------------------------------------
export const GEOLOCATION_PANEL_ID = "geolocation-document-panel";
registerPlugin(GEOLOCATION_PANEL_ID,{
	render: ()=> <PluginDocumentSettingPanel
			title="Geolocation"
			icon="location"
		>
		<GeolocationControl {...Geolocations} />
	</PluginDocumentSettingPanel>
});