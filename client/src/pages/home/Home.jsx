import React, { Component } from 'react';
import "./home.css";
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';
import axios from "axios";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";

export default function Home(){

  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
    console.log(search)
  }, [search]);
  return (
    <>
        <Header/>
        <div className="homePage">
            <Sidebar/>
            <Posts posts={posts}/>
        </div>
    </>
    )
  }

