import "./App.css";
import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Work from "./components/Work";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home skills="Frontend/Wordpress/Shopify Developer" />}
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
          <Route exact path="/work" element={<Work />}></Route>
          <Route exact path="/contactform" element={<ContactForm />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
