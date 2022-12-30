import './App.css';
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import NavBar from './components/NavBar.js'
import PostOverview from './pages/PostOverview.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app-bg ">
      <NavBar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/post" element={<PostOverview />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
