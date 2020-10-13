import {PanelBody, SelectControl, TextControl} from "@wordpress/components";


const TaxonomyAddressesControls = ({attributes, setAttributes})=>{

    const {i18n, taxonomies} = Geolocations;

    const {taxonomy = "", terms = ""} = attributes;

    const setTerms = (terms)=> setAttributes({terms})
    const setTaxonomy = (taxonomy) => setAttributes({taxonomy})

    return <div>
        <SelectControl
            label={i18n.selectTaxonomy}
            value={taxonomy}
            onChange={setTaxonomy}
            options={taxonomies.map(({label, name})=>({label, value:name}))}
        />
        <TextControl
            label={i18n.setTerms}
            value={terms}
            onChange={setTerms}
        />
        <p className="description">{i18n.setTerms_description}</p>
    </div>
}

export default TaxonomyAddressesControls;