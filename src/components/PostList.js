import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
    render() {

        const teste = {
            title: 'Welcome to React',
            description:'This is only a post description',
            content:'This is only a post content',
            category:'Capoeira',
            image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            rating:'5',
            comments:'8',
            date:'20/02/2019',
            good:'3',
            bad:'2'
          };
      
        return (

            <div className="ui cards">
                <Post postMeta={teste}/>
                <Post postMeta={teste}/>
                <Post postMeta={teste}/>
                <Post postMeta={teste}/>
            </div>

        );
    }


}

export default PostList;