import {TextControl} from "@wordpress/components"
import {useEffect, useMemo, useState} from "@wordpress/element"
import {useGeolocation} from "../hooks/use-geolocation";
import useDebounce from '../hooks/debounce'

const GeolocationControl = ({fields}) => {

    const [geolocation, setGeolocationFields] = useGeolocation();
    const [showCopyField, setShowCopyField] = useState(false);
    const [searchForAddress, setSearchForAddress] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const inputFields = useMemo(() => fields.filter(({hide}) => {
        return !hide;
    }), [fields.map(({key}) => key)]);

    const handleShowCopyAddress = (e) => {
        e.preventDefault();
        setShowCopyField(true);
    }

    const debouncedSearchForAddress = useDebounce(searchForAddress, 600);

    useEffect(() => {
        if (debouncedSearchForAddress.length < 3) {
            setSuggestions([]);
            return;
        }

        const controller = new AbortController();
        const params = new URLSearchParams({
            action: 'geolocations_admin',
            term: debouncedSearchForAddress,
        })
        setIsSearching(true);
        fetch(
            ajaxurl + "?" + params,
            {
                signal: controller.signal,
            }
        )
            .then(res => res.json())
            .then(setSuggestions)
            .finally(()=> setIsSearching(false));

        return () => {
            setIsSearching(false);
            controller.abort();
        }
    }, [debouncedSearchForAddress]);

    const handleSuggestionClick = (suggestion)=> {
        setShowCopyField(false);
        setGeolocationFields({
            ...suggestion.values
        })
    }

    return <div>
        {
            showCopyField ?
                <div className="geolocations__suggestions-wrapper">
                    <TextControl
                        label="Von vorhandener Adresse kopieren"
                        value={searchForAddress}
                        onChange={setSearchForAddress}
                        placholder="Nach Adresse suchen"
                    />
                    {isSearching ? <span className="spinner is-active"></span> : null }
                    <div className="geolocations__suggestions">
                        {suggestions.map(s=>{
                            return <div
                                className="geolocations__suggestions-item"
                                key={s.ID}
                                onClick={()=>handleSuggestionClick(s)}
                            >
                                <div><strong>{s.post_title}</strong></div>
                                <div>{s.address}</div>
                            </div>
                        })}
                    </div>
                </div>
                :
                <a href="#" onClick={handleShowCopyAddress}>Von vorhandener Adresse kopieren</a>
        }

        <hr/>

        {inputFields.map(({key, label, readonly}) =>
            <TextControl
                key={key}
                label={label}
                readOnly={readonly}
                value={geolocation[key] || ""}
                onChange={value => {
                    setGeolocationFields({
                        [key]: value,
                    })
                }}
            />
        )}
    </div>
}

export default GeolocationControl;
