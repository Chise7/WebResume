import React from 'react';
import test from "/test-block.png"
import "../styles/home.css";

const Home = () =>{
    return(
        <section id="Home">
            <div className="home">
                <div className="home-text-cont">
                <div className="home-text">Hello, My Name is: </div>
                    <header className="connorhise">Connor Hise</header>
                    <div className="home-text">Welcome To My Resume!</div>
                </div>
                <div className="home-art">
                    <img src={test}></img>
                </div>
            </div>
        </section>
    );
};

export default Home;