import {dispatch, useSelect} from '@wordpress/data';

export const useGeolocation = ()=>{
    const geolocation = useSelect(select=> select('core/editor').getEditedPostAttribute('geolocation'));
    const {editPost} = dispatch('core/editor');
    return [
        geolocation,
        (fieldsMap)=>{
            editPost({
                geolocation:{
                    ...geolocation,
                    ...fieldsMap
                }
            })
        }
    ]
}