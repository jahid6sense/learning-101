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

type PlacesProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void;
};

export default function Places({ setOffice }: PlacesProps) {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    console.log(ready);
    console.log(usePlacesAutocomplete());

    const handleSelect = async (val: any) => {
        // const handleSelect = async () => {
        console.log('object');
        setValue(val, false);
        clearSuggestions();

        // const results = await getGeocode({ address: val });
        const results = await getGeocode({ address: value });
        const { lat, lng } = await getLatLng(results[0]);
        console.log({ lat, lng });
        console.log('value', value);
        setOffice({ lat, lng });
    };

    console.log(data, status)

    return (
        <>
            {/* <Combobox
                onSelect={handleSelect}
            // onBlur={() => { handleSelect }}
            >
                <ComboboxInput
                    value={value}
                    onChange={(e: any) => {
                        setValue(e.target.value)
                        console.log(e)
                    }}
                    // disabled={!ready}
                    className="combobox-input mb-10"
                    placeholder="Search office address"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" &&
                            data.map(({ place_id, description }: any) => (
                                <ComboboxOption key={place_id} value={description} />
                            ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox> */}


            <Combobox aria-labelledby="demo" onSelect={handleSelect}>
                <ComboboxInput value={value}
                    onChange={(e: any) => {
                        setValue(e.target.value)
                        console.log(e)
                    }}
                    // disabled={!ready}
                    className="combobox-input mb-10"
                    placeholder="Search office address" />
                <ComboboxPopover>
                    <ComboboxList>
                        {data.map(({ place_id, description }: any) => (
                                <ComboboxOption key={place_id} value={description} />))}
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
