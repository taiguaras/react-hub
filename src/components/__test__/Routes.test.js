import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Route } from "react-router-dom";
import Routes from '../Routes';


describe('Routes', () => {
  let mountedRoutes;

  beforeEach(() => {
    mountedRoutes = shallow(<Routes />);
  });

  it('renders without crashing', () => {
    shallow(<Routes />);
  });

});