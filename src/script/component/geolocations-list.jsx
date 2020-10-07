import React, {Component} from 'react';

import geo_events from '../helper/events.js';

import ListItem from './geolocation-list-item.jsx';

export default class GeolocationsList extends Component {
	
	/**
	 * ------------------------------------------------
	 * lifecycle
	 * ------------------------------------------------
	 */
	constructor(props) {
		super(props);
		this.state = {
			maps: null,
			page: 1,
			gloc_active: -1,
		}
		
		this.types = ['geocode','regions','cities'];
		
		this.max_page = Math.round(this.props.geolocations.length/this.props.posts_per_page);
		
		this.props.events.addListener(geo_events.MAP_MARKER_CLICKED, this.onMarkerClicked.bind(this));
		this.props.events.addListener(geo_events.MAP_CLICKED, this.onMapClicked.bind(this));
		
		
	}
	
	componentWillUnmount() {
	}
	
	/**
	 * ------------------------------------------------
	 * rendering
	 * ------------------------------------------------
	 */
	renderItem(gloc){
		return <ListItem
			key={gloc.id}
			geolocation={gloc}
			events={this.props.events}
		/>
	}
	renderPager(){
		return <div
			className="geolocations__pager">
					<span
						className="geolocations__pager-prev"
						onClick={this.onChangePage.bind(this,-1)}
					>
						&laquo;
					</span>
			{this.state.page} / {this.max_page}
			<span
				className="geolocations__pager-next"
				onClick={this.onChangePage.bind(this,1)}
			>
						&raquo;
					</span>
		</div>
	}
	render() {
		const types = ['geocode','regions','cities'];
		
		/**
		 * pager or no pager is the question
		 */
		let items = [];
		let start = 0;
		let end = this.props.geolocations.length;
		let pager = null;
		
		if(this.props.posts_per_page > 0){
			start = (this.state.page-1)*this.props.posts_per_page;
			end = start+this.props.posts_per_page;
			if(end >= this.props.geolocations.length) end = this.props.geolocations.length;
			pager =  this.renderPager();
		}
		
		/**
		 * get items
		 */
		for(let i = start; i < end; i++){
			const _geolocation = this.props.geolocations[i];
			if(this.state.gloc_active > 0 && this.state.gloc_active === _geolocation.id){
				items.unshift(this.renderItem(_geolocation))
			} else {
				items.push(this.renderItem(_geolocation));
			}
			
		}
		
		return (
			<div
				className="geolocations__list-wrapper">
				
				<div
					className="geolocations__list"
				>
					{items}
				</div>
				
				{pager}
				
			</div>
		)
	}
	
	/**
	 * ------------------------------------------------
	 * events
	 * ------------------------------------------------
	 */
	onMarkerClicked(gloc){
		this.setState({gloc_active: gloc.id});
		// let active = false;
		// if(gloc.id == this.props.geolocation.id){
		// 	active = true;
		// };
		// this.setState({active: active});
	}
	onMapClicked(info){
		this.setState({gloc_active: -1});
	}
	
	onChangePage(diff){
		this.state.page = this.state.page+diff;
		if(this.state.page < 1) this.state.page = 1;
		if(this.state.page >= this.max_page){
			this.state.page = this.max_page;
		}

		this.setState({page: this.state.page});
	}
	
	
	/**
	 * ------------------------------------------------
	 * other functions
	 * ------------------------------------------------
	 */
}
GeolocationsList.defaultProps = {
	posts_per_page: -1,
}
