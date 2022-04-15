import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100vh',
};


const Maps = ({ apiKey, listings, hoveredListing }) => {
    const [selected, setSelected] = useState(null);
    const [center, setCenter] = useState({ lat: 25.752349481188816, lng: -80.2634573883995 })


    useEffect(() => {
        setSelected(hoveredListing)
        if (hoveredListing) setCenter({ lat: Number(hoveredListing.lat), lng: Number(hoveredListing.lng) })
    }, [hoveredListing]);


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });



    return (
        <>
            {isLoaded && (
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
                    {listings.map(listing => (
                        <Marker
                            key={listing.id}
                            position={{
                                lat: Number(listing.lat),
                                lng: Number(listing.lng)
                            }}
                            onClick={() => {
                                setSelected(listing);
                            }}
                        />

                    ))}
                    {selected && (
                        <InfoWindow
                            position={{
                                lat: Number(selected.lat),
                                lng: Number(selected.long),
                            }}
                            onCloseClick={() => {
                                setSelected(null);
                            }}
                        >
                            <div>
                                <h4>{selected.name}</h4>
                                {/* {selected.town} */}
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            )}
        </>
    );
};

export default React.memo(Maps);
