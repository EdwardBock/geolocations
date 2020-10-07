import React, {Component} from 'react';

export default class Finder extends Component {
	
	/**
	 * ------------------------------------------------
	 * lifecycle
	 * ------------------------------------------------
	 */
	constructor(props) {
		super(props);
		//TODO: input that looks for addresses and gets the locations
		//TODO: than have a look for markers that are nearest
	}
	
	componentWillUnmount() {
	}
	
	/**
	 * ------------------------------------------------
	 * rendering
	 * ------------------------------------------------
	 */
	render() {
		return (
			<div>
				Component
			</div>
		)
	}
	
	/**
	 * ------------------------------------------------
	 * events
	 * ------------------------------------------------
	 */
	
	/**
	 * ------------------------------------------------
	 * other functions
	 * ------------------------------------------------
	 */
}
Finder.defaultProps = {
	value: 0
}
