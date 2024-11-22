import React from 'react';
import "../styles/home.css";

const Home = () =>{
    return(
        <section id="Home">
            <div className="home">
                <div className="home-title">
                    About Me
                </div>
                <div className="about-text">
                    I am a 2024 Purdue University Computer Engineering graduate with 
                    <br></br> 
                    a passion for building and rebuilding the world around me, in order to
                    <br></br> 
                    improve the lives of myself and the people around me through 
                    <br></br> 
                    solving complex problems, whether they be personal or technical.
                    <br></br>
                    <br></br> 
                    I started my journey in my freshman year at Purdue, where upon 
                    <br></br>
                    taking my first coding class I knew that this was my calling. 
                    <br></br>
                    Since that point I have been able to enjoy an multiple internships,
                    <br></br>
                    one with Landis+Gyr in the Quality Assurance team, and another
                    <br></br>
                    with Newr Company, a technical startup where I worked 
                    <br></br> 
                    to develop Firmware and Software Applications. 
                    <br></br>
                    <br></br> 
                    I also was able to develop projects outside of my academic curricula,
                    <br></br>
                    particularly my Senior Design project, Kaleidoscope, and Project Emrick,
                    <br></br> 
                    the Purdue All American Marching Band wearable light redesign.
                    <br></br> 
                    These projects,as well as the repository for this website, can be found
                    <br></br> 
                    under the "Projects" tab. Feel free to contact me with questions!
                </div>
            </div>
        </section>
    );
};

export default Home;