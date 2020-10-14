import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';

import styles from './helper/map-styles.js';

import GeolocationsApp from './component/geolocations.jsx';


const apps = window.geolocations_data;

const places = window.geolocation_places;
let default_place = null;
if(typeof places !== typeof undefined && places != null && places.length > 0){
	default_place = places[0];
}

for(let index in apps ){
	
	if(!apps.hasOwnProperty(index))continue;
	
	ReactDOM.render(
		<GeolocationsApp
			zip="33602"
			geolocations={apps[index].data}
			default_place={default_place}
			hide_list={apps[index].hide_list}
			hide_search={apps[index].hide_search}
			hide_filter={apps[index].hide_filter}
			styles={styles}
			apikey={Geolocations.api_key}
		/>,
		document.getElementById("geolocations__root-"+index)
	);
	document.getElementById("gelocations-posts-list-"+index).style.display = 'none';
}

