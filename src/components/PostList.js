import React, { Component } from 'react';
import Post from './Post';
import { List } from 'semantic-ui-react';

// const teste = {
//     title: 'Welcome to React',
//     description:'This is only a post description',
//     content:'This is only a post content',
//     category:'Capoeira',
//     image:'https://react.semantic-ui.com/images/avatar/large/matthew.png',
//     rating:'5',
//     comments:'8',
//     date:'20/02/2019',
//     good:'3',
//     bad:'2'
//   };

class PostList extends Component {

    render() {

        const { Posts } = this.props;
      
        return (

            <div className="ui cards"> 

            {Posts.map((post) => (

                <Post postMeta={post} key={post.id}/>                       
            
            ))}  

                {/* <Post postMeta={teste}/>
                <Post postMeta={teste}/>
                <Post postMeta={teste}/>
                <Post postMeta={teste}/> */}
            </div>

        );
    }


}

export default PostList;