import React, { useState } from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

import {dataSource} from './data';

import { driverInformation,  handleCancel } from './MapContainer.helpers';

import DriverInformationModal from './DriverInformationModal';

const MapContainer = (props) => {
    const [modalStatus, setModalStatus] = useState(false);
    const [currentDriver, setCurrentDriver] = useState({});

    const markerList = dataSource.map((item) => {
        return (
            <Marker
                key={item['driverid']}
                title={`Driver's name: ${item["driverName"]}`}
                position={{lat: item['location']['latitude'], lng: item['location']['longitude']}} 
                onClick={() => driverInformation(item['driverid'], dataSource, setCurrentDriver, setModalStatus)}
            />
        )
    });

    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
            <DriverInformationModal 
                currentDriver={currentDriver}
                modalStatus={modalStatus}
                setModalStatus={setModalStatus}
                handleCancel={handleCancel}
            />
            <Map google={props.google}
                className={'map'}
                zoom={12}>
                {markerList}
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapContainer)