import React, { Component } from 'react';
import PostList from '../components/PostList';
import { Button } from 'semantic-ui-react'

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
                    </div>
                    <Button>Rating</Button>  
                    <Button>Date</Button>     
                    <PostList/>                    
                </div>    
            </Layout>             
        );
        
    }
}

export default Main;