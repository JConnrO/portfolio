import './App.css';
import React, { useState } from 'react';

import Navbar from './components/navbar';
import Header from './components/header';
import Contact from './components/contact';
import Showcase from './components/showcase';
import Project from './components/project';

function App() {
  const [pages] = useState([
    {name: "Home", description: "Bio"},
    { name: "Portfolio", description: "Display of projects" },
    { name: "Contact", description: "Leave me a message" },
    { name: "Resume", description: "Leave me a message" },

  ])
  const [projects] = useState([
    {name:"Reciplanner", description: "Lorem"},
    {name:"Reciplanner", description: "Lorem"},
    {name:"Reciplanner", description: "Lorem"},

  ])
  return (
    <div className="App">
      <Navbar
      
      />
      <Header/>
      <Showcase
        projects={projects}
      />
      <Contact/>
    </div>
  );
}

export default App;
