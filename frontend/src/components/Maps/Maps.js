import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};



const center = {
    // lat: 38.9072,
    // lng: 77.0369,
    lat: 25.752349481188816,
    lng: -80.2634573883995
};

const Maps = ({ apiKey }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    return (
        <>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}>
                    <Marker />
                </GoogleMap>
            )}
        </>
    );
};

export default React.memo(Maps);
