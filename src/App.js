import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path = "/" element = {<Login />}></Route>
          <Route exact path = "/home" element = {<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
