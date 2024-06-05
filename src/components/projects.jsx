import React from 'react';
import "../styles/projects.css";
import Projects_Card from './projects_card.jsx';
import Kaleidoscope from "/Kaleidoscope.png";
import Emrick from "/Emrick.jpg";

const Projects = () =>{
    return(
        <section id="Projects">
            <div className="projects">
                <h2 className="projects-title">Projects</h2>
                <div className="card-container">
                    <Projects_Card title="Project Emrick" text="LoRa Communication Embedded C++ Microcontroller"picture= {Emrick}/>
                    <Projects_Card title="Kaleidoscope" text="AI Rotoscoping via Django Website" picture= { Kaleidoscope }/>
                    <Projects_Card title="Web Resume" text="ReactJS Web Page"/>
                </div>
            </div>
        </section>
    );
};

export default Projects;