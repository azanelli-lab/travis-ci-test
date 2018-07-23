import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<List />', () => {

  const items = [
    { id: 1, label: 'test 1' },
    { id: 2, label: 'test 2' },
  ];

  it('renders without crashing', () => {
    const component = shallow(<List items={items} />);
    expect(component).toMatchSnapshot();
  });

  it('renders all the items', () => {
    const component = shallow(<List items={items} />);
    expect(component.find('.c-list__item').length).toBe(2);
  });

});
