import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/contact">Contact</Link>
        <br></br>
        <Link to="/company">Company</Link>
        <br></br>
        <Link to="/newproject">NewProject</Link>
        <br></br>
      </div>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
