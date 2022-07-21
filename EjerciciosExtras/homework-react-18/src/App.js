import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import UserPosts from "./components/UserPosts/UserPosts";
import Users from './components/Users/Users'
import { CommentsPost } from "./components/CommentsPost/CommentsPost";


function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/Home" component={Users} />
        <Route path="/users/:id/posts" component={UserPosts} element={<UserPosts />} />
      </Routes>
    </Fragment>
  )
}

export default App
