import {FormTokenField, SelectControl } from "@wordpress/components";
import {useFetchTaxonomyTerms} from "../hooks/use-taxonomy";
import {useEffect} from "@wordpress/element";

const migrateTermsString = (termsString)=>{
    return termsString.split(",").map(t=> t.replaceAll(" ", ""))
}

const findTermByName = (name, terms) => terms.find(_t=>_t.name === name);
const findTermBySlug = (slug, terms) => terms.find(_t => _t.slug === slug);
const findTermById = (id, terms) => terms.find(_t => _t.id === id);
const findTerm = (s, terms) =>findTermById(s, terms) || findTermBySlug(s, terms) || findTermByName(s, terms);

const TaxonomyAddressesControls = ({attributes, setAttributes})=>{

    const {i18n, taxonomies} = Geolocations;

    const {taxonomy = "", terms = []} = attributes;
    const setTerms = (terms)=> setAttributes({terms})
    const setTaxonomy = (taxonomy) => setAttributes({taxonomy})

    useEffect(()=>{
        if(taxonomy === ""){
            setTaxonomy(taxonomies[0].name);
        }
    }, [taxonomy, taxonomies])
    const taxonomyTerms = useFetchTaxonomyTerms(taxonomy)

    const handleChangeTerms = (_terms)=>{
        const newTerms = _terms.map(t=>{
            const search = typeof t === typeof "" ? t : t.value;
            const _term = findTerm(search, taxonomyTerms);
            return _term ? _term.slug : search;
        })
        setTerms([
            ...newTerms
        ])
    }

    return <div>
        <SelectControl
            label={i18n.selectTaxonomy}
            value={taxonomy}
            onChange={setTaxonomy}
            options={taxonomies.map(({label, name})=>({label, value:name}))}
        />
        <FormTokenField
            label={i18n.setTerms}
            value={(typeof terms === typeof [] ? terms : migrateTermsString(terms)).map(_term=>{
                const taxonomyTerm = findTerm(_term, taxonomyTerms)
                return taxonomyTerm ? taxonomyTerm.name : _term;
            })}
            suggestions={taxonomyTerms.map(t=>(t.name))}
            onChange={handleChangeTerms}
        />
    </div>
}

export default TaxonomyAddressesControls;