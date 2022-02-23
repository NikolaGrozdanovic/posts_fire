import logo from './logo.svg';
import './App.css';
import Posts from './pages/Posts';
import Post from './pages/Post';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/posts" element={<Posts/>}>
        </Route>
        <Route path="/posts/:id" element={<Post/>}>
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App;
