import { TextControl } from "@wordpress/components"
import { useMemo } from "@wordpress/element"
import { useGeolocation } from "../hooks/use-geolocation";

const GeolocationControl = ({fields})=>{

    const [geolocation, setGeolocationFields] = useGeolocation();

    const inputFields = useMemo(()=> fields.filter(({hide})=>{
        return !hide;
    }), [fields.map(({key})=>key)])

    return <div>
        {inputFields.map(({key, label, readonly})=>
            <TextControl
                key={key}
                label={label}
                readOnly={readonly}
                value={geolocation[key] || ""}
                onChange={value=>{
                    setGeolocationFields({
                        [key]: value,
                    })
                }}
            />
        )}
    </div>
}

export default GeolocationControl;