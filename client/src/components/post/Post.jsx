import React, { Component } from 'react';
import "./post.css";

export default class Post extends Component {
  render() {
    return (
    <div className="post">
      <img
        className="postImg"
        src={this.props.img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            {/* <Link className="link" to="/posts?cat=Music">
              Music
            </Link> */}
            Music
          </span>
          <span className="postCat">
            {/* <Link className="link" to="/posts?cat=Music">
              Life
            </Link> */}
            Life
          </span>
        </div>
        <span className="postTitle">
          {/* <Link to="/post/abc" className="link">
            This is the post title
          </Link> */}
          This is the post title
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        random description random description random description random description random description
        random description random description random description random description random description
        random description
      </p>
    </div>
    )
  }
}
