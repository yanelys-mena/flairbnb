import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '50vh',
};



const center = {
    // lat: 38.9072,
    // lng: 77.0369,
    lat: 25.752349481188816,
    lng: -80.2634573883995
};

const Maps = ({ apiKey, listings }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    console.log('MAPS', listings)

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
                        />
                    ))}

                </GoogleMap>
            )}
        </>
    );
};

export default React.memo(Maps);
