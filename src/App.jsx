import React from "react";
import "./App.css";
import Home from './components/home.jsx';
import Sidebar from './components/sidebar.jsx';
import Projects from './components/projects.jsx'

export default function App() {
  return (
    <div className="App">
      <Home />
      <Sidebar />
      <Projects />
    </div>
  );
};


