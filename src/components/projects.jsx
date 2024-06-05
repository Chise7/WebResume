import React, { useState } from 'react';
import "../styles/projects.css";
import Projects_Card from './projects_card.jsx';
import Kaleidoscope from "/Kaleidoscope.png";
import Emrick from "/Emrick.jpg";
import ReactPic from "/react.png";

const emrick_info = "summary";
const emrick_technologies = "tech";
const kscope_info = "summary";
const kscope_technologies = "tech";
const resume_info = "summary";
const resume_technologies = "React";

const Projects = () =>{
    const [expandedCard,setExpandedCard] = useState(null);

    const handleToggle = (cardId) =>{
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    return(
        <section id="Projects">
            <div className="projects">
                <h2 className="projects-title">Projects</h2>
                <div className="projects-intro">Click on any of the cards to view more about some of my recent projects!</div>
                <div className="card-container">
                    <Projects_Card 
                        id= "Emrick" 
                        title="Project Emrick" 
                        text="LoRa Communication Embedded C++ Microcontroller" 
                        picture= { Emrick } 
                        expanded={ expandedCard === 'Emrick' }
                        onToggle={ handleToggle }
                        summary = {emrick_info}
                        technologies = {emrick_technologies}
                    />
                    <Projects_Card 
                        id= "Kaleidoscope" 
                        title="Kaleidoscope" 
                        text="AI Rotoscoping via Django Website" 
                        picture= { Kaleidoscope }
                        expanded={ expandedCard === 'Kaleidoscope' }
                        onToggle={ handleToggle }
                        summary = {kscope_info}
                        technologies = {kscope_technologies}
                    />
                    <Projects_Card 
                        id= "Resume" 
                        title="Web Resume" 
                        text="React Web Page"
                        picture= { ReactPic }
                        expanded={ expandedCard === 'Resume' }
                        onToggle={ handleToggle }
                        summary = {resume_info}
                        technologies = {resume_technologies}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;