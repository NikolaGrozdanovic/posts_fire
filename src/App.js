import logo from './logo.svg';
import './App.css';
import Posts from './pages/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <Posts/>
  )
}

export default App;
