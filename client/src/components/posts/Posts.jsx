import React, { Component } from 'react';
import './posts.css';
import Post from '../post/Post';

export default class Posts extends Component {
  render() {
    return (
      <div className='posts'>
        {this.posts.map(p => 
          <Post post={p}/>
        )}
        {/* <Post img="https://images.pexels.com/photos/4198029/pexels-photo-4198029.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        <Post img="https://images.pexels.com/photos/4913507/pexels-photo-4913507.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        <Post img="https://images.pexels.com/photos/4913510/pexels-photo-4913510.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        <Post img="https://images.pexels.com/photos/7647583/pexels-photo-7647583.jpeg?auto=compress&cs=tinysrgb&w=600"/> */}
      </div>
    )
  }
}

