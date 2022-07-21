import React from "react";
import { Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Users from './components/Users/Users';
import UsersPosts from './components/UserPosts/UserPosts';
import CommentsPost from './components/CommentsPost/CommentsPost';
import Buscador from './components/Buscador/Buscador';


function App() {
  return (
    <React.Fragment>
      <NavBar />
        <Route path="/filter/posts" component={Buscador} />
        <Route exact path="/" component={Users} />
        <Route path="/users/:id/posts" component={UsersPosts}/>
        <Route path="/user/:userid/post/:id/coments" component={CommentsPost}/>
    </React.Fragment>
  )
}

export default App
