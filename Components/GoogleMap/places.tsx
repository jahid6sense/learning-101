import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    // @ts-ignore
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useEffect } from "react";

type PlacesProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void;
};

export default function Places({ setOffice }: PlacesProps) {
    const {
        ready,
        value,
        setValue,
        // suggestions: { status, data },
        suggestions,
        clearSuggestions,
    } = usePlacesAutocomplete();

    const { status, data } = suggestions;
    // console.log(data);

    useEffect(() => {
        console.log(data);
    }, [data])

    const handleSelect = async (val: any) => {
        // const handleSelect = async () => {
        console.log('object', val);
        setValue(val, false);
        // setValue(value, false);
        clearSuggestions();

        const results = await getGeocode({ address: val });
        // const results = await getGeocode({ address: value });
        const { lat, lng } = await getLatLng(results[0]);
        console.log({ lat, lng });
        console.log('value', value);
        setOffice({ lat, lng });
    };

    // console.log("data, status", data, status)

    return (
        <>
            <Combobox
                onSelect={handleSelect}
                style={{ zIndex: "10000 !important" }}
            // onBlur={() => { handleSelect }}
            >
                <ComboboxInput
                    style={{ zIndex: "10000 !important" }}
                    value={value}
                    onChange={(e: any) => {
                        setValue(e.target.value)
                    }}
                    // disabled={!ready}
                    className="combobox-input mb-10"
                    placeholder="Search office address"
                />
                <ComboboxPopover style={{ zIndex: "10000 !important" }}>
                    <ComboboxList style={{ zIndex: "10000 !important" }}>
                        {/* status === "OK" && */}
                        {data?.map(({ place_id, description }: any) => (
                            <ComboboxOption
                                style={{ zIndex: "10000 !important" }}
                                key={place_id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>


        </>

        // <>
        //     <input
        //         type="text"
        //         value={value}
        //         onChange={(e: any) => {
        //             setValue(e.target.value)
        //             console.log(e)
        //         }}
        //         // disabled={!ready}
        //         className="combobox-input mb-10"
        //         placeholder="Search office address" />

        //     <button
        //         onClick={() => handleSelect()}
        //     >Get Location
        //     </button>
        // </>
    );
}
