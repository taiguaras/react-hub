import React from 'react';
import { shallow } from 'enzyme';
import Post from '../Post';


describe('Post', () => {
  let mountedPost;
  
  beforeEach(() => {
    mountedPost = shallow(<Post />);
  });

  it('renders without crashing', () => {
    shallow(<Post />);
  });
});