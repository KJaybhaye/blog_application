import React, { Component } from 'react';
import "./postPage.css";
import SinglePost from '../../components/singlePost/SinglePost';
import Sidebar from '../../components/sidebar/Sidebar';

export default class PostPage extends Component {
  render() {
    return (
      <div className='postPage'>
        <SinglePost/>
        <Sidebar/>
      </div>
    )
  }
}
