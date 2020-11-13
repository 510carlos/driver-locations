import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import DriverInfromationModal from './DriverInformationModal';

const currentDriver = {
  driverName: 'Carlos Mendoza',
  deliveries: 10,
  remaining: 1,
  nextDestination: '123 fake st',
};

const setModalStatus = () => jest.fn();
const handleCancel = () => jest.fn();

const modal = (
  <DriverInfromationModal
    currentDriver={currentDriver}
    modalStatus
    setModalStatus={setModalStatus}
    handleCancel={handleCancel}
  />
);

it('Mount modal component and take a snapshot', () => {
  const mounted = mount(modal);
  expect(toJSON(mounted)).toMatchSnapshot();
});

test('Mount DriverInformationMount and vrify display information is correct', () => {
  const wrap = mount(modal);
  const driverInfo = wrap.find('ul li');

  const name = driverInfo.at(0).text();
  const deliveries = driverInfo.at(1).text();
  const remaining = driverInfo.at(2).text();
  const next = driverInfo.at(3).text();

  expect(name).toEqual('Driver Name: Carlos Mendoza');
  expect(deliveries).toEqual('Number of deliveries: 10');
  expect(remaining).toEqual('Number of remaining: 1');
  expect(next).toEqual('Next destination: 123 fake st');
});
