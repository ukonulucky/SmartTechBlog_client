
import './App.css'
import Home from './components/Home/Home'
import PublicNavbar from './components/Navbar/PublicNavbar'
import CreatePost from './components/Post/CreatePost'
import EditPost from './components/Post/EditPost'
// import CreatePost from './components/Post/CreatePost'
import ListAllPost from './components/Post/ListAllPost'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from './components/User/Login'
import Register from './components/User/Register'
function App() {


  return (
   <Router>
    <PublicNavbar />
    <Routes>
    <Route  path='/'  element={<Home />} />
      <Route  path='/posts'  element={<ListAllPost />} />
      <Route  path='/create-post'  element={<CreatePost />} />
      <Route  path='/posts/:postId'  element={<EditPost />} />
      <Route  path='/login'  element={<Login />} />
      <Route  path='/register'  element={<Register />} />
    </Routes>
  
   </Router>
  )
}

export default App
