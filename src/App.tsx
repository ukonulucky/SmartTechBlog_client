import "./App.css";
import Home from "./components/Home/Home";

import CreatePost from "./components/Post/CreatePost";
import EditPost from "./components/Post/EditPost";
// import CreatePost from './components/Post/CreatePost'
import ListAllPost from "./components/Post/ListAllPost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/User/Login";
import Register from "./components/User/Register";

import { useQuery } from "@tanstack/react-query";
import { authenticateUserApi } from "./APIServices/User/UserApi";
import { useEffect } from "react";
import { isAuthenticated } from "./redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import AuthNavbar from "./components/AuthNavbar/AuthNavbar";
function App() {
  const dispatch = useDispatch();

  const { authReducer } = useSelector((state) => state);

  const { data, error, refetch } = useQuery({
    queryKey: ["user-auth"],
    queryFn: authenticateUserApi,
    enabled: true,
  });

  useEffect(() => {
    console.log("ran effect")
    dispatch(isAuthenticated(data));
    
  }, [data]);

  
  // authReducer?.userAuth?.isAuthenticated
  return (
    <Router>
    <AuthNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<ListAllPost />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/posts/:postId" element={<EditPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
