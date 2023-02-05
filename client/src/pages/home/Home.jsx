import React, { Component } from 'react';
import "./home.css";
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';

export default class Home extends Component {
  render() {
    return (
    <>
        <Header/>
        <div className="homePage">
            <Sidebar/>
            <Posts/>
        </div>
    </>
    )
  }
}
