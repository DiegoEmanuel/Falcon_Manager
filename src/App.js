import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Container from "./components/layout/Container";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import NewProject from "./components/pages/NewProject";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
