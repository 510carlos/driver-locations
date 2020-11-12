import { mount } from 'enzyme';
import Template from './Template';
import * as renderer from "react-test-renderer";

test('renders Template component and makes a snapshot', () => {
    const tree = renderer.create(<Template />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('Verify that the title is correct on the drivers map page', () => {
    const wrap = mount(<Template />);
    const title = wrap.find('.ant-breadcrumb-link').text()
    expect(title).toEqual('Map of Drivers');
});