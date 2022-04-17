import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import './Maps.css'

const containerStyle = {
    width: '100%',
    height: '100vh',
};


const Maps = ({ apiKey, listings, hoveredListing }) => {
    const [selected, setSelected] = useState(null);
    const [center, setCenter] = useState({ lat: 41.68030120482413, lng: -93.79865983926028 })

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
                            <div id="maps_pin">
                                {selected.name.slice(0, 20)}...
                                <img id="map_pin_photo" src={selected.Images[1].url}></img>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            )}
        </>
    );
};

export default React.memo(Maps);
