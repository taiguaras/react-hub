import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <div>
    <a>
        <Icon name='plus' />
    </a>
    <a>
        <Icon name='minus' />
    </a> 
    8 votes
  </div>
)

class Post extends Component {
    render() {
        return (          

            <Card
            image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            extra={extra}
          />

        );
    }


}

export default Post;