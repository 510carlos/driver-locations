import React, { useState } from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Modal } from 'antd';

import {dataSource} from './data';

const MapContainer = (props) => {
    const [modalStatus, setModalStatus] = useState(false);
    const [currentDriver, setCurrentDriver] = useState({});

    const onClick = (driverid) => {
        const driver = dataSource.find((driver) => driver.driverid === driverid);
        setCurrentDriver(driver)
        setModalStatus(true)
    }
    const handleCancel = () => setModalStatus(false)

    const markerList = dataSource.map((item) => {
        return (
            <Marker
                key={item['driverid']}
                title={`Driver's name: ${item["driverName"]}`}
                position={{lat: item['location']['latitude'], lng: item['location']['longitude']}} 
                onClick={() => onClick(item['driverid'])}
            />
        )
    });

    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
            <Modal
            title="Driver Information"
            visible={modalStatus}
            onCancel={handleCancel}
            footer={null}
            >
                <ul>
                    <li><b>Driver Name:</b> {currentDriver['driverName']}</li>
                    <li><b>Number of deliveries:</b> {currentDriver['deliveries']}</li>
                    <li><b>Number of remaining:</b> {currentDriver['remaining']}</li>
                    <li><b>Next destination:</b> {currentDriver['nextDestination']}</li>
                </ul>
            </Modal>
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