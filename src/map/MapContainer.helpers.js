export const driverInformation = (
  driverid,
  dataSource,
  setCurrentDriver,
  setModalStatus
) => {
  const driverInfo = dataSource.find((driver) => driver.driverid === driverid);
  setCurrentDriver(driverInfo);
  setModalStatus(true);
};

export const handleCancel = (setModalStatus) => setModalStatus(false);
