// import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dept from "./page/Dept";
import Emp from "./page/Emp";
import Home from "./page/Home";
import Login from "./page/Login";

function App() {
  return (
    <Router>
      <nav>
        {/* <a>는 진짜 페이지 이동을 해버려서 안됨 */}
        {/* <a href="/">Home</a> */}

        {/* pushState */}
        <Link to="/">Home</Link>
        <Link to="/emp">Emp</Link>
        <Link to="/dept">Dept</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/emp" element={<Emp/>}/>
        <Route path="/dept" element={<Dept/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
