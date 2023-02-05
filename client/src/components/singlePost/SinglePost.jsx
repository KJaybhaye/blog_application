import React, { Component } from 'react';
import "./singlePost.css";

export default class SinglePost extends Component {
  render() {
    return (
      <div className='singlePost'>
        <div className="postWrapper">
            <img src="https://cdn.pixabay.com/photo/2020/06/19/22/33/wormhole-5319067__480.jpg" alt="postImage" className="postImage" />
        </div>
        <h1 className="postTitle">
            this is the title
            <div className="postEdit">
            <i class="postIcon fa-solid fa-pen-to-square"></i>
            <i class="postIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="postInfo">
            <span>Author : <b className='postAuthor'>My Name</b></span>
            <span>13 Hours ago</span>
        </div>
        <p className="postBody">
            random description random description random description random description random description random description
            random description random description random description random description random description random description
            random description random description random description random description random description random description
            random description random description random description random description random description random description
            random description random description random description random description random description random description
            random description random description random description random description random description random description
            random description random description random description random description random description random description
            random description random description random description random description random description random description
            random description random description random description random description random description random description
            random description random description random description random description random description random description
            random description random description random description random description random description random description
            random description random description random description random description random description random description
        </p>
      </div>
    )
  }
}
