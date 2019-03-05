import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../PostList';


describe('PostList', () => {
  let mountedPostList;
  
  beforeEach(() => {
    mountedPostList = shallow(<PostList />);
  });

  it('renders without crashing', () => {
    shallow(<PostList />);
  });
});