import React, {Component} from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

// https://github.com/ubilabs/react-geosuggest
import Geosuggest from 'react-geosuggest';

import GeolocationsList from './geolocations-list.jsx';
import ListItem from './geolocation-list-item.jsx';
import GeoMarker from './geolocation-marker.jsx';
import Filter from './geolocation-filter.jsx';

import Events from 'events';
import geo_events from '../helper/events.js';


export default class Geolocations extends Component{
	
	/**
	 * ------------------------------------------------
	 * lifecycle
	 * ------------------------------------------------
	 */
	constructor(props){
		super(props);
		
		this.bounds = new google.maps.LatLngBounds();
		
		this.state = {
			types:{},
			types_active: {},
		};
		
		for(let key in props.geolocations){
			if(!props.geolocations.hasOwnProperty(key)) continue;
			let type = props.geolocations[key].type;
			if(type.slug !== "") this.state.types[type.slug] = type.label;
		}
		
		/**
		 * global events
		 * @type {EventEmitter}
		 */
		this._events = new Events.EventEmitter();
		this._events.setMaxListeners(0);
		
		this._events.addListener(geo_events.LIST_ITEM_HOVER,this.onListItemHover.bind(this));
		this._events.addListener(geo_events.LIST_ITEM_CLICKED,this.onListItemClicked.bind(this));
		this._events.addListener(geo_events.PLACES_RESULT,this.onPlacesResult.bind(this));
		this._events.addListener(geo_events.MAP_MARKER_ADDED,this.onMarkerAdded.bind(this));

		// hash checks
		this._hasInitialZoomHash = (typeof this.getHashZoom() !== typeof undefined);
		this._hasInitialCenterHash = (typeof this.getHashCenter() !== typeof undefined);

	}
	/**
	 * ------------------------------------------------
	 * rendering
	 * ------------------------------------------------
	 */
	renderMarker(gloc){
		return <GeoMarker
			key={gloc.id}
			geolocation={gloc}
			lat={gloc.lat}
			lng={gloc.lng}
			onClick={this.onClickMarker.bind(this, gloc)}
			onMouseOver={this.onMouseHoverMarker.bind(this, gloc, true)}
			onMouseOut={this.onMouseHoverMarker.bind(this, gloc, false)}
		    events={this._events}
		/>
	}
	
	render(){
		if(this.props.geolocations.length < 2){
			return this.renderSingle();
		}
		return this.renderMulti();
	}
	
	renderSingle(){
		return (
			<div
				className="geolocations is-single-address"
			>
				{this.renderMaps()}
				<ListItem
					is_single={true}
					geolocation={this.props.geolocations[0]}
				/>
			</div>
		)
	}
	
	renderMulti(markers){
		const {hide_list, hide_search} = this.props;
		return (
			<div
				className={`geolocations ${(hide_list)? "": "show-list"} ${(hide_search)? "": "show-search"}`}
			>
				{this.renderMaps()}
				{this.renderSearch()}
				{this.renderFilter()}
				{this.renderList()}
			
			</div>
		)
	}
	
	renderMaps(){
		const geolocs = this.props.geolocations;
		
		let markers = [];
		let lats = [];
		let lngs = [];
		
		let types = {};
		
		let center_lat = 0;
		let center_lng = 0;
		
		if(this.props.default_place){
			let place = this.props.default_place;
			center_lat = place.geometry.location.lat;
			center_lng = place.geometry.location.lng;
			// TODO: find nearest and add to bounds
			let nearest = null;
			let nearest_distance = -1;
			for(let i = 0; i < geolocs.length; i++){
				let distance = Geolocations.distance(geolocs[i].lat, geolocs[i].lng, center_lat, center_lng);
				if(nearest_distance < 0 || nearest_distance > distance){
					nearest = new google.maps.LatLng(geolocs[i].lat, geolocs[i].lng);
					nearest_distance =  distance;
				}
			}
			this.bounds = new google.maps.LatLngBounds(place.geometry.bounds.southwest, place.geometry.bounds.northeast);
			this.bounds.extend(nearest);
			
		} else {
			for(let i = 0; i < geolocs.length; i++){
				this.bounds.extend(new google.maps.LatLng(geolocs[i].lat, geolocs[i].lng));
				lats.push(geolocs[i].lat);
				lngs.push(geolocs[i].lng);
			}
			center_lat = (Math.max(...lats)+Math.min(...lats))/2;
			center_lng = (Math.max(...lngs)+Math.min(...lngs))/2;
		}

		if(this._hasInitialCenterHash){
			center_lat = this.getHashCenter().lat;
			center_lng = this.getHashCenter().lng;
		}

		let zoom = 12;
		if(this._hasInitialZoomHash) zoom = parseInt(this.getHashZoom());
		
		for(let i = 0; i < geolocs.length; i++){
			markers.push(this.renderMarker(geolocs[i]));
		}

		return(
			<Gmaps
				className="geolocations__map"
				lat={center_lat}
				lng={center_lng}
				zoom={zoom}
				params={{v: '3.exp', key: this.props.apikey}}
				styles={this.props.styles}
				onMapCreated={this.onMapCreated.bind(this)}
				onCenterChanged={this.onMapCenterChanged.bind(this)}
				onZoomChanged={this.onMapZoomChanged.bind(this)}
			    onClick={this.onMapClick.bind(this)}
				onSearch
			>
				{markers}
			</Gmaps>
		)
	}
	
	renderSearch(){

		let geosuggest = <Geosuggest
			ref={el=> this._geoSuggest=el }
			placeholder="Suche in der Nähe"
			country="de"
			initialValue={(this.props.default_place)?this.props.default_place.formatted_address:""}
			onSuggestSelect={this.onSuggestSelect.bind(this)}
			onChange={(value)=>{
				//this.setHashSearch(value)
				}}
		/>
		
		// geosuggest.update("33601");
		return this.renderIf(!this.props.hide_search,(
			geosuggest
		));
	}
	
	renderList(){
		return this.renderIf(!this.props.hide_list,(
			<GeolocationsList
				geolocations={this.props.geolocations}
				events={this._events}
			/>
		));
	}
	
	renderFilter(){
		return this.renderIf((!this.props.hide_filter && Object.keys(this.state.types).length > 0),(
			<Filter
				items={this.state.types}
				onToggleActive={this.onToggleTypeActive.bind(this)}
			/>
		));
	}
	
	renderIf(render, element){
		return (render)? element: null;
	}
	
	/**
	 * ------------------------------------------------
	 * events
	 * ------------------------------------------------
	 */
	onMapCreated(map) {
		this.map = map;

		if(!this._hasInitialCenterHash){
			map.fitBounds(this.bounds);
		}

		map.setOptions({
			disableDefaultUI: false,
			mapTypeControl: false,
		});
		this._events.emit(geo_events.MAPS_READY, map);
		const props = this.props;
		const listener = google.maps.event.addListener(map, "idle", function() {
			if (map.getZoom() > props.min_zoom) map.setZoom(props.min_zoom);
			google.maps.event.removeListener(listener);
		});
		this.onMapCenterChanged();
		this.onRestoreState();
	}

	onRestoreState(){

		const id = this.getHashId();
		if(id){
			const result = this.props.geolocations.find( (geoloc)=> geoloc.id === parseInt(id) );
			if(result){

				//this._geoSuggest.update("Osnabrück");
				// this._geoSuggest.selectSuggest();
				// this._events.emit(geo_events.LIST_ITEM_CLICKED, result);
				this._events.emit(geo_events.MAP_MARKER_CLICKED, result);

			}
		}
	}
	
	onMarkerAdded(marker, gloc){
		// this.bounds.extend(marker);
		// this.map.fitBounds(this.bounds);
	}
	
	onMapCenterChanged(){
		// prevent too many events with timeout
		clearTimeout(this._center_change_timeout);
		this._center_change_timeout = setTimeout(()=>{
			if(this.map != null && this.map.getBounds() != null){
				this._events.emit(geo_events.MAP_CENTER_CHANGED, this.map.getBounds());
				this.setHashValue("zoom", this.map.zoom);
				this.setHashCenter(this.map.center.lat(), this.map.center.lng());
			}
		},600);
	}
	
	onMapZoomChanged(){
		this.onMapCenterChanged();
		this.setHashValue("zoom", this.map.zoom);
	}
	onMapClick(info){
		this._events.emit(geo_events.MAP_CLICKED, info);
	}
	onClickMarker(gloc){
		this._events.emit(geo_events.MAP_MARKER_CLICKED,gloc);
		this.setHashId(gloc.id);
	}
	onMouseHoverMarker(gloc, over){
		this._events.emit(geo_events.MAP_MARKER_HOVER,gloc, over);
	}
	onGotoLocation(location){
		const latLng = this.getLatLng(location);
		if(latLng !== false) this.map.panTo(new google.maps.LatLng(latLng));
	}
	onListItemHover(location){
		// this.map.panTo(new google.maps.LatLng({lat: location.lat, lng: location.lng}));
	}
	onListItemClicked(geoloc){
		if(typeof geoloc === "undefined") return;

		const currentZoom = this.map.getZoom();
		if(currentZoom < 10 || currentZoom > 12){
			this.map.setZoom(11);
		}
		const latLng = this.getLatLng(geoloc);
		if(latLng !== false) this.map.panTo(new google.maps.LatLng(latLng));
		this.setHashId(geoloc.id);
	}
	onPlacesResult(suggest){
		if(typeof suggest === "undefined") return;

		const location = suggest.location;
		const bounds = suggest.gmaps.geometry.bounds;
		// this.map.panToBounds(bounds); NO ZOOMING
		if(bounds){
			this.map.fitBounds(bounds);
		} else {
			const currentZoom = this.map.getZoom();
			if(currentZoom < 10 || currentZoom > 12){
				this.map.setZoom(11);
			}
			const latLng = this.getLatLng(location);
			if(latLng !== false) this.map.panTo(new google.maps.LatLng(latLng));
		}
		
	}
	onSuggestSelect(suggest){
		this._events.emit(geo_events.PLACES_RESULT, suggest);
	}
	onToggleTypeActive(slug, isActive){
		this._events.emit(geo_events.TYPE_ACTIVE_CHANGE, slug, isActive);
	}
	
	/**
	 * ------------------------------------------------
	 * other functions
	 * ------------------------------------------------
	 */
	getLatLng(geoloc){
		const result = {lat:false, lng:false};
		if(typeof geoloc.lat === typeof "string"){
			result.lat = parseFloat(geoloc.lat);
		} else if(typeof geoloc.lat === typeof 1.1) {
			result.lat = geoloc.lat;
		}
		if(typeof geoloc.lng === typeof "string"){
			result.lng = parseFloat(geoloc.lng);
		} else if(typeof geoloc.lng === typeof 1.1) {
			result.lng = geoloc.lng;
		}
		if(typeof result.lat !== typeof 1.1 || typeof result.lng !== typeof 1.1){
			return false;
		}

		return result;
	}
	static distance(lat1, lng1, lat2, lng2) {
		let diff_lat = Math.abs(lat1-lat2);
		let diff_lng = Math.abs(lng1-lng2);
		return Math.sqrt( (diff_lat*diff_lat) + (diff_lng*diff_lng) );
	}

	/**
	 * ------------------------------------------------
	 * url hash functions
	 * ------------------------------------------------
	 */
	setHashId(value){
		this.setHashValue("id", value);
	}
	getHashId(){
		return this.getHashValue("id");
	}
	setHashCenter(lat, lng){
		this.setHashValue("lat", lat);
		this.setHashValue("lng", lng);
	}
	getHashCenter(){
		const {lat, lng} = this.getHashValues();
		return (
			typeof lat === typeof undefined || typeof lng === typeof undefined
		) ? undefined : {lat, lng};
	}
	setHashZoom(zoom){
		this.setHashValue("zoom", zoom);
	}
	getHashZoom(){
		return this.getHashValue("zoom");
	}
	setHashSearch(value){
		this.setHashValue("s", value);
	}
	getHashSearch(){
		return this.getHashValue("s");
	}
	getHashValues(){
		const hash = window.location.hash;
		if(hash.indexOf("#") !== 0 || hash.length < 2) return {};
		const params = hash.substr(1);
		if(params.indexOf("=") < 1) return {};
		const items = hash.substr(1).split("&").map((pair)=> pair.split("="));
		const object = {};
		items.forEach((item)=>{
			if(
				typeof item[0] !== typeof undefined && item[0].length > 0
				&&
				typeof item[1] !== typeof undefined && item[1].length > 0
			){
				object[item[0]] = item[1];
			}
		});
		return object;

	}
	getHashValue(key){
		return this.getHashValues()[key];
	}
	setHashValues(obj){
		let state = "";
		if(Object.keys(obj).length > 0){
			state = "#"+Object.keys(obj).map((key)=> key+"="+obj[key] ).join("&");
		}
		history.replaceState(undefined, undefined, state);
	}
	setHashValue(key, value){
		const values = this.getHashValues();
		values[key] = value;
		let state = "";
		if(Object.keys(values).length > 0){
			state = "#"+Object.keys(values)
			.filter((key)=> typeof values[key] !== typeof undefined && values[key] !== "" )
			.map((key)=> key+"="+values[key] )
			.join("&");
		}
		history.replaceState(undefined, undefined, state);
	}


}

Geolocations.defaultProps = {
	geolocations: [],
	default_place: null,
	min_zoom: 15,
	hide_list: false,
	hide_search: false,
	hide_filter: false,
};
