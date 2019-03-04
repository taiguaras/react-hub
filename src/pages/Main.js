import React, { Component } from 'react';
import PostList from '../components/PostList';

// import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
// import { Dropdown, Input } from 'semantic-ui-react'

class Main extends Component {

      render() {

        return(       
            <Layout>
                <div className="main-page">
                    <div className="intro-content"> 
                        <h2>Welcome to React Hub!!</h2>
                        <button>Rating</button>  
                        <button>Date</button>                  
                    </div>
                    <PostList/>                    
                </div>    
            </Layout>             
        );
        
    }
}

export default Main;