import React from "react";
import { Modal } from 'antd';

const DriverInformationModal = ({currentDriver, modalStatus, setModalStatus, handleCancel}) => {
    return (
        <Modal
        title="Driver Information"
        visible={modalStatus}
        onCancel={() => handleCancel(setModalStatus)}
        footer={null}
        >
            <ul>
                <li><b>Driver Name:</b> {currentDriver['driverName']}</li>
                <li><b>Number of deliveries:</b> {currentDriver['deliveries']}</li>
                <li><b>Number of remaining:</b> {currentDriver['remaining']}</li>
                <li><b>Next destination:</b> {currentDriver['nextDestination']}</li>
            </ul>
        </Modal>
    )
}

export default DriverInformationModal;