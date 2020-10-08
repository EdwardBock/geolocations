import {InspectorControls} from '@wordpress/block-editor'
import {ToggleControl, PanelBody, TextControl, SelectControl, Button, Dashicon} from "@wordpress/components";
import {useEffect, useState} from "@wordpress/element";
import ServerSideRender from '@wordpress/server-side-render';

import {blockName} from "../blocks/AddressBlock";

const Highlight = ({string, isHighlighted})=>{
    return <>{isHighlighted? <strong>{string}</strong>: string}</>
}

const Suggestion = ({ID, address, post_title, highlightID, highlightTitle, highlightAddress, onClick}) => {
    return <div
        onClick={onClick}
        style={{
            borderBottom:"1px solid #efefef",
            padding: "10px 0",
        }}
    >
        <small><Highlight string={ID} isHighlighted={highlightID} /></small><br/>
        <Highlight string={post_title} isHighlighted={highlightTitle} /><br/>
        <i><Highlight string={address} isHighlighted={highlightAddress} /></i>
    </div>
}

const SelectedLocation = ({ID, address, post_title, onRemove}) => {
    return <div
        style={{
            border:"1px solid #efefef",
            borderColor: "var(--wp-admin-theme-color)",
            padding: 10,
            marginLeft: -10,
            marginRight: -10,
            marginBottom: 20,
            position:"relative",
        }}
    >
        <small>{ID}</small><br/>
        {post_title}<br/>
        <i>{address}</i>
        <span
            style={{
                position: "absolute",
                right: 10,
                top: "50%",
                marginTop: -10,
                cursor: "pointer"
            }}
            onClick={onRemove}
        >
            <Dashicon icon="trash"  />
        </span>

    </div>
}

const isPartOf = (value, part) => value.toLowerCase().indexOf(part.toLowerCase()) >= 0

const AddressInspectorControls = ({attributes, setAttributes})=>{

    const {i18n, locations} = Geolocations;

    const {single = false, post_id, taxonomy = "", terms = ""} = attributes;

    const setSingle = (single) => setAttributes({single})
    const setTerms = (terms)=> setAttributes({terms})
    const setTaxonomy = (taxonomy) => setAttributes({taxonomy})
    const setPostId = (post_id) => setAttributes({post_id})

    const [address, setAddress] = useState("")
    const [numberOfSuggestions, setNumberOfSuggestions] = useState(10)

    const selectedLocation = locations.find(({ID})=> ID === post_id)
    console.log(selectedLocation)

    const handleShowMore = ()=> setNumberOfSuggestions(value=> value+10);

    const suggestionsById = locations.filter(({ID})=> ID+"" === address).map(location=>({
        ...location,
        highlightID: true,
    }));
    const suggestionsByTitle = locations.filter(({post_title})=> isPartOf(post_title, address)).map(location=>({
        ...location,
        highlightTitle: true,
    }));
    const suggestionsByAddress = locations.filter( location => isPartOf(location.address, address)).map(location=>({
        ...location,
        highlightAddress: true,
    }));

    const suggestions = (address.length > 0) ? [...suggestionsById, ...suggestionsByTitle, ...suggestionsByAddress] : [];
    const uniqueSuggestions = [...new Set(suggestions.map(({ID})=>ID))].map(ID=>{
        return suggestions.find(location=> location.ID === ID);
    })

    const hasMore = uniqueSuggestions.length > numberOfSuggestions;
    const slicedSuggestions = uniqueSuggestions.slice(0, numberOfSuggestions)

    return <PanelBody>

        <ToggleControl
            label={i18n.onlyOneAddress}
            help={single? i18n.onlyOneAddress_true : i18n.onlyOneAddress_false}
            checked={single}
            onChange={setSingle}
        />

        {single ?
            <>
                {selectedLocation ?
                    <SelectedLocation
                        {...selectedLocation}
                        onRemove={()=>setPostId(0)}
                    />
                    :
                    null
                }
                <TextControl
                    label={i18n.selectPost}
                    value={address}
                    onChange={setAddress}
                />
                {slicedSuggestions.map(suggestion => <Suggestion key={suggestion.ID} {...suggestion} onClick={()=>{
                    setPostId(suggestion.ID)
                }} />)}
                {hasMore ?
                    <div style={{textAlign:"center"}}>
                        <Button isTertiary onClick={handleShowMore}>Show more</Button>
                    </div>
                    :
                    null
                }

                <p className="description">{i18n.selectPost_description}</p>
            </>
            :
            <>
                <SelectControl
                    label={i18n.selectTaxonomy}
                    value={taxonomy}
                    onChange={setTaxonomy}
                    options={[
                        {label: 'Category', value: 'category'},
                        {label: 'Tag', value: 'post_tag'}
                    ]}
                />
                <TextControl
                    label={i18n.setTerms}
                    value={terms}
                    onChange={setTerms}
                />
                <p className="description">{i18n.setTerms_description}</p>
            </>
        }
    </PanelBody>
}

const AddressBlock = ({isSelected, className,  setAttributes, attributes})=>{
    console.log(attributes)

    const {single = false, post_id = 0, taxonomy = "", terms = ""} = attributes;

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