import React, { Component } from 'react';
import "./header.css";

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className='headTitles'>
            <span className='headTitle1'>React And Node App</span>
            <span className='headTitle2'>Blogs</span>
        </div>
        <img className='headerImage' src='https://cdn.pixabay.com/photo/2018/02/23/22/04/book-bindings-3176776_1280.jpg'
        alt=''/>
      </div>
    )
  }
}
