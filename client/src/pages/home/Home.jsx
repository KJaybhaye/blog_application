import React, { Component } from 'react';
import "./home.css";
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';
import axios from "axios";
import { useLocation } from "react-router";

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts : {}
    }
  }

  fetchPosts = async (search) => {
    const res = await axios.get("/posts" + search);
    console.log(res);
    this.setState({posts: res.data});
  }; 
  componentDidMount(){
    console.log("one");
    this.fetchPosts("");
  }
  render() {
    return (
    <>
        <Header/>
        <div className="homePage">
            <Sidebar/>
            <Posts posts={this.state.posts}/>
        </div>
    </>
    )
  }
}
