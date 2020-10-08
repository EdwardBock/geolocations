// ------------------------------
// custom document area panels
// ------------------------------
import { registerPlugin } from "@wordpress/plugins"
import { PluginDocumentSettingPanel } from '@wordpress/edit-post'
import {withSelect} from "@wordpress/data";
import GeolocationControl from "../components/GeolocationControl.js";

// ------------------------------------------
// extend documents panel
// ------------------------------------------
export const GEOLOCATION_PANEL_ID = "geolocation-document-panel";
const GeolocationsDocumentPanel = withSelect(select => {
	return {
		postType: select('core/editor').getCurrentPostType()
	}
})(({postType})=>{

	if(!Geolocations.postTypes.includes(postType)) return null;

	return <PluginDocumentSettingPanel
		title="Geolocation"
		icon="location-alt"
	>
		<GeolocationControl {...Geolocations} />
	</PluginDocumentSettingPanel>
})

registerPlugin(GEOLOCATION_PANEL_ID,{
	render: ()=> <GeolocationsDocumentPanel />
});
