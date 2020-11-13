export const driverInformation = (driverid, dataSource, setCurrentDriver, setModalStatus) => {
    const driver = dataSource.find((driver) => driver.driverid === driverid);
        setCurrentDriver(driver)
        setModalStatus(true)
}

export const handleCancel = (setModalStatus) => setModalStatus(false)