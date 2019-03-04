import React, { Component } from 'react';
import Routes from '../components/Routes';
import styled from 'styled-components';

const Div = styled.div`
.intro-content{
background-color: yellow;   
}
.main-page{
  margin-top: 58px;
}
`;

class App extends Component {
  render() {
    return (
      <Div>
        <Routes /> 
      </Div> 
    );
  }
}

export default App;
