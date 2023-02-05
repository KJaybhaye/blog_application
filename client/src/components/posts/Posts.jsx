import React, { Component } from 'react';
import './posts.css';
import Post from '../post/Post';

export default class Posts extends Component {
  render() {
    return (
      <div className='posts'>
        <Post img="https://cdn.pixabay.com/photo/2020/06/19/22/33/wormhole-5319067__480.jpg"/>
        <Post img="https://cdn.pixabay.com/photo/2020/06/19/22/33/wormhole-5319067__480.jpg"/>
        <Post img="https://cdn.pixabay.com/photo/2020/06/19/22/33/wormhole-5319067__480.jpg"/>
        <Post img="https://cdn.pixabay.com/photo/2020/06/19/22/33/wormhole-5319067__480.jpg"/>
      </div>
    )
  }
}

