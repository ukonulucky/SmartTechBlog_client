
import './App.css'
import Home from './components/Home/Home'
import PublicNavbar from './components/Navbar/PublicNavbar'
import CreatePost from './components/Post/CreatePost'
import EditPost from './components/Post/EditPost'
// import CreatePost from './components/Post/CreatePost'
import ListAllPost from './components/Post/ListAllPost'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
function App() {


  return (
   <Router>
    <PublicNavbar />
    <Routes>
    <Route  path='/'  element={<Home />} />
      <Route  path='/posts'  element={<ListAllPost />} />
      <Route  path='/create-post'  element={<CreatePost />} />
      <Route  path='/posts/:postId'  element={<EditPost />} />
    </Routes>
  
   </Router>
  )
}

export default App
