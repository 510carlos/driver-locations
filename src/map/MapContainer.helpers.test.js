import { driverInformation, handleCancel } from './MapContainer.helpers';
import { dataSource } from './data';

test('Verify that the `DriverInformation` works properly', () => {
  const setCurrentDriver = jest.fn();
  const setModalStatus = jest.fn();
  driverInformation(1, dataSource, setCurrentDriver, setModalStatus);

  expect(setCurrentDriver).toBeCalledWith({
    deliveries: 10,
    driverName: 'Carlos Mendoza',
    driverid: 1,
    location: { latitude: 37.778519, longitude: -122.40564 },
    nextDestination: '3847 Judah St, San Francisco, CA 94122',
    remaining: 1,
  });
  expect(setModalStatus).toBeCalledWith(true);
});

test('Verify that the `handleCancel` works properly', () => {
  const setModalStatus = jest.fn();
  handleCancel(setModalStatus);

  expect(setModalStatus).toBeCalledWith(false);
});
