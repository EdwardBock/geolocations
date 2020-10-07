import React, {Component} from 'react';
import _ from 'underscore';

const geo_events = require('../helper/events.js');

export default class GeolocationListItem extends Component {
	
	/**
	 * ------------------------------------------------
	 * lifecycle
	 * ------------------------------------------------
	 */
	constructor(props) {
		super(props);
		
		this.state = {
			active: false,
			type_active: true,
			is_visible: true,
		};
		
		if(typeof this.props.events !== typeof undefined && this.props.events != null){
			this.props.events.addListener(geo_events.MAP_MARKER_CLICKED, this.onMarkerClicked.bind(this));
			this.props.events.addListener(geo_events.LIST_ITEM_CLICKED, this.onAnyItemClicked.bind(this));
			
			this.props.events.addListener(geo_events.TYPE_ACTIVE_CHANGE, this.onTypeActiveChange.bind(this));
			this.props.events.addListener(geo_events.MAP_MARKER_IS_VISIBLE, this.onMarkerIsVisible.bind(this));
		}
	}
	
	/**
	 * ------------------------------------------------
	 * rendering
	 * ------------------------------------------------
	 */
	render() {
		// console.log(this.state);
		if(!this.state.type_active || (!this.state.is_visible && !this.state.active)) return null;
		let active = (this.state.active)? " is-active": "";
		const {mail,url} = this.props.geolocation;
		let _mail, _url;
		if(!_.isUndefined(mail)){
			_mail = <a
				href={`mailto:${mail}`}
			    className="geolocations__mail-link"
			>
				{mail}
			</a>
		}
		if(!_.isUndefined(url)){
			let http = "";
			if(url.indexOf("http") < 0){
				http = "http://";
			}
			_url = <a
				href={`${http}${url}`}
				className="geolocations__url-link"
			>
				{url}
			</a>
		}
		return (
			<div
				className={`geolocations__item${active}`}
				onMouseEnter={this.onMouseOver.bind(this)}
			    onMouseLeave={this.onMouseOut.bind(this)}
			    onClick={this.onClick.bind(this)}
			>
				
				{this.renderIf("geolocations__name",this.renderTitle())}
				{this.renderIf("geolocations__function",this.props.geolocation.func)}
				{this.renderIf("geolocations__address",this.props.geolocation.address)}
				{this.renderIf("geolocations__phone",this.props.geolocation.phone)}
				{this.renderIf("geolocations__fax",this.props.geolocation.fax)}
				
				{this.renderIf("geolocations__mail",_mail)}
				{this.renderIf("geolocations__url",_url)}
								
			</div>
		)
	}
	
	renderTitle(){
		if(this.state.active && !this.props.is_single){
			return (
				<a
					href={this.props.geolocation.permalink}
				>
					{this.props.geolocation.title}
				</a>
			)
		}
		return this.props.geolocation.title;
	}
	
	renderIf(classname, value){
		if(_.isUndefined(value) || value == "") return null;
		return <div className={classname}>{value}</div>
	}
	
	/**
	 * ------------------------------------------------
	 * events
	 * ------------------------------------------------
	 */
	onTypeActiveChange(slug, isactive){
		if(slug == this.props.geolocation.type.slug){
			this.setState({type_active: isactive});
		}
	}
	
	/**
	 * ------------------------------------------------
	 * other functions
	 * ------------------------------------------------
	 */
	onMarkerClicked(gloc){
		let active = false;
		if(gloc.id === this.props.geolocation.id){
			active = true;
		};
		this.setState({active: active});
	}
	onAnyItemClicked(gloc){
		if(gloc.id === this.props.geolocation.id) {
			this.setState({active:true});
		} else {
			this.setState({active:false});
		}

		
	}
	onClick(){
		this.emitIf(geo_events.LIST_ITEM_CLICKED);
		this.setState({active:true});
	}
	onMouseOver(e){
		this.emitIf(geo_events.LIST_ITEM_HOVER, true);
	}
	onMouseOut(e){
		this.emitIf(geo_events.LIST_ITEM_HOVER, false)
	}
	emitIf(event, value){
		if(typeof this.props.events != typeof undefined && this.props.events != null){
			this.props.events.emit(event, this.props.geolocation, value);
		}
	}
	onMarkerIsVisible(is_visible, gloc){
		if(gloc.id == this.props.geolocation.id){
			this.setState({is_visible: is_visible});
		}
	}
	
}
GeolocationListItem.defaultProps = {
	is_single: false,
}