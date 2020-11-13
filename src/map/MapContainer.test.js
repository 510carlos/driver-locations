import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import MapContainer from './MapContainer';

test('renders learn react link', () => {
  const tree = renderer.create(<MapContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Verify that the component is loading correctly', () => {
  const wrap = mount(<MapContainer />);
  const body = wrap.find('div').text();
  expect(body).toEqual('Loading...');
});
