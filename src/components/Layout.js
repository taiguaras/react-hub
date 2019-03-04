import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Layout extends Component {
  render() {
    return (
        <React.Fragment>
            <Navbar />
                {this.props.children}
            <Footer />
        </React.Fragment>
    );
  }
}

export default Layout;