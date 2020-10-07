import React, {Component} from 'react';

class Filter extends Component {
	
	/**
	 * ------------------------------------------------
	 * lifecycle
	 * ------------------------------------------------
	 */
	constructor(props) {
		super(props);
		
		this.state = {
			active:{},
			active_list: false,
		};
		
	}
	
	/**
	 * ------------------------------------------------
	 * rendering
	 * ------------------------------------------------
	 */
	renderFilters(){
		let elements = [];
		for(let slug in this.props.items){
			
			let label = this.props.items[slug];
			elements.push(
				<div
					className={`filter__item ${(this.isActive(slug))? "is-active": "is-inactive"}`}
					key={slug}
					onClick={this.onToggleActive.bind(this,slug)}
				>
				{label}
				</div>
			);
		}
		return elements;
	}
	render() {
		if(Object.keys(this.props.items).length < 1) return null;
		return (
			<div
				className={`geolocations__filter ${(this.state.active_list)? "is-active": "is-inactive"}`}
			>
				<label
					className="filter__label"
				    onClick={this.onToggleList.bind(this)}
				>
					Filter
				</label>
				<div
					className="filter__list"
				>
					{this.renderFilters()}
				</div>
			</div>
		)
	}
	
	/**
	 * ------------------------------------------------
	 * events
	 * ------------------------------------------------
	 */
	onToggleList(){
		this.setState({active_list: !this.state.active_list})
	}
	onToggleActive(slug){
		this.state.active[slug] = !this.isActive(slug);
		this.setState({active: this.state.active});
		if(typeof this.props.onToggleActive !== typeof undefined){
			this.props.onToggleActive(slug,this.state.active[slug]);
		}
	}
	
	/**
	 * ------------------------------------------------
	 * other functions
	 * ------------------------------------------------
	 */
	isActive(slug){
		if(typeof this.state.active[slug] === typeof undefined){
			this.state.active[slug] = true;
		}
		return this.state.active[slug];
	}
}

/**
 * property defaults
 */
Filter.defaultProps = {
	items: {},
};

/**
 * export component to public
 */
export default Filter;