import {InspectorControls} from '@wordpress/block-editor'
import {ToggleControl, PanelBody} from "@wordpress/components";
import ServerSideRender from '@wordpress/server-side-render';

import {blockName} from "../blocks/AddressBlock";
import SingleAddressControls from "./SingleAddressControls";
import TaxonomyAddressesControls from "./TaxonomyAddressesControls";

const AddressInspectorControls = ({attributes, setAttributes})=>{

    const {i18n} = Geolocations;
    const {single = false} = attributes;

    const setSingle = (single) =>{
        if(single){
            setAttributes({
                single,
                post_id: 0,
            })
        } else {
            setAttributes({
                single,
                taxonomy: "",
                terms: "",
            })
        }
    }

    return <PanelBody>

        <ToggleControl
            label={i18n.onlyOneAddress}
            help={single? i18n.onlyOneAddress_true : i18n.onlyOneAddress_false}
            checked={single}
            onChange={setSingle}
        />

        {single ?
            <SingleAddressControls
                attributes={attributes}
                setAttributes={setAttributes}
            />
            :
            <TaxonomyAddressesControls
                attributes={attributes}
                setAttributes={setAttributes}
            />
        }
    </PanelBody>
}

const AddressBlock = ({isSelected, className,  setAttributes, attributes})=>{
    return <>
        <InspectorControls>
                <AddressInspectorControls
                    setAttributes={setAttributes}
                    attributes={attributes}
                />
        </InspectorControls>
        <div className={className}>
            <ServerSideRender
                block={blockName}
                attributes={attributes}
            />
        </div>
    </>
}

export default AddressBlock;