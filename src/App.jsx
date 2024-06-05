import React from "react";
import "./App.css";
import Home from './components/home.jsx';
import Sidebar from './components/sidebar.jsx';
import Projects from './components/projects.jsx';
import Experience from './components/experience.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';

export default function App() {
  return (
    <div className="App">
      <Home />
      <Sidebar />
      <Projects />
      <Experience/>
      <About/>
      <Contact/>
    </div>
  );
};


