import _ from 'underscore';

import React, {Component} from 'react';

import {Marker, Circle} from 'react-gmaps';

import geo_events from '../helper/events.js';

export default class GeolocationMarker extends Marker {
	
	/**
	 * ------------------------------------------------
	 * lifecycle
	 * ------------------------------------------------
	 */
	constructor(props) {
		super(props);
		
		this.state = {
			over: this.props.over,
			scale: 1,
			visible: true,
		};
		
	}
	
	componentDidMount(){
		super.componentDidMount();
		
		const gloc = this.props.geolocation;
		const marker = this.getEntity();
		const options = this.getOptions(this.props);
		
		let icon = {
			path: "M39,7.09A24.83,24.83,0,0,0,19.61,47.43h0L38,70.44a1.24,1.24,0,0,0,1.94,0l18.42-23h0A24.83,24.83,0,0,0,39,7.09Z",
			fillColor: "#FF0000",
			fillOpacity: .6,
			strokeColor: '#FF0000',
			strokeWeight: 1,
			strokeOpacity: 1,
			scale: 0.6,
			anchor: {
				x: 40,
				y: 70,
			},
		};
		
		const _icon = gloc.marker_icon;
		
		if(_.isObject(_icon)){
			for(var key in _icon){
				icon[key] = _icon[key];
			}
		}
		
		marker.setIcon(icon);
		
		this.props.events.emit(geo_events.MAP_MARKER_ADDED, marker, gloc);
		this.props.events.addListener(geo_events.LIST_ITEM_HOVER,this.onHover.bind(this));
		this.props.events.addListener(geo_events.MAP_CENTER_CHANGED, this.onMapCenterChange.bind(this));
		this.props.events.addListener(geo_events.TYPE_ACTIVE_CHANGE, this.onActiveChange.bind(this));
	}
	
	componentWillUnmount(){
		super.componentWillUnmount();
		this.props.events.removeListener(geo_events.LIST_ITEM_HOVER,this.onHover);
		this.props.events.removeListener(geo_events.MAP_CENTER_CHANGED, this.onMapCenterChange.bind(this));
		this.props.events.removeListener(geo_events.TYPE_ACTIVE_CHANGE, this.onActiveChange.bind(this));
	}
	
	componentDidUpdate(){
		const marker = this.getEntity();
		if(this.state.over){
			marker.setAnimation(google.maps.Animation.BOUNCE);
		} else {
			marker.setAnimation(null);
		}
	}
	
	/**
	 * ------------------------------------------------
	 * rendering
	 * ------------------------------------------------
	 */
	// no rendering needed here because gmaps does the rendering
	
	/**
	 * ------------------------------------------------
	 * events
	 * ------------------------------------------------
	 */
	onHover(gloc, over ){
		if(gloc.id != this.props.geolocation.id) return;
		this.setState({over:over});
	}
	onActiveChange(slug, isactive){
		const {geolocation, map} = this.props;
		if(geolocation.type.slug == slug){
			console.log("relevant onActiveChange", slug, isactive);
			if(isactive){
				this.getEntity().setMap(map);
			} else {
				this.getEntity().setMap(null);
			}
		}
	}
	onMapCenterChange(bounds){
		const is_visible = bounds.contains(this.getEntity().getPosition());
		if(this.state.visible != is_visible){
			this.state.visible = is_visible;
			this.props.events.emit(geo_events.MAP_MARKER_IS_VISIBLE, is_visible, this.props.geolocation);
		}
	}
	/**
	 * ------------------------------------------------
	 * other functions
	 * ------------------------------------------------
	 */
}

GeolocationMarker.defaultProps = {
	over: false,
}
