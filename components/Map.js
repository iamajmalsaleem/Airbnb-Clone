import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import getCenter  from 'geolib/es/getCenter';
import { Marker, Popup } from 'react-map-gl';

function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState({})

    const coordinates = searchResults.map((result)=>({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });

    return (
        <ReactMapGL
            mapStyle = 'mapbox://styles/ajmal82/ckx45v3yu2quq14pcu72pss6u'
            mapboxApiAccessToken = {process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            {searchResults.map((result) => (
                <div key={result.long}>
                    <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}>
                        <p 
                          type = 'img'
                          aria-label='push-pin'
                          onClick={() => setSelectedLocation({long : result.long, lat: result.lat})}
                          className='cursor-pointer text-2xl animate-bounce'
                        >
                           📌
                        </p>
                    </Marker>

                    {selectedLocation.long === result.long ? (
                        <Popup
                          onClose={()=>setSelectedLocation({})}
                          closeOnClick={true}
                          latitude={result.lat} 
                          longitude={result.long} 
                          className='z-50'
                        >
                            {result.title}
                        </Popup>
                    ) : (false)}
                </div>    
            ))}
        </ReactMapGL>
    )
}

export default Map
