import { registerBlockType } from '@wordpress/blocks'
import AddressBlock from "../components/AddressBlock";

export const blockName = 'geolocations/address';

registerBlockType( blockName, {
	title: 'Address',
	description: 'Place a map',
	category: 'embed',
	icon: 'location-alt',
	supports: {
		align: false,
		customClassName: false,
		html: false,
	},
	edit: (args) => <AddressBlock {...args} />,
})