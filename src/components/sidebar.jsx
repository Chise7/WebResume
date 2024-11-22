import React, { useEffect, useState } from 'react';
import "../styles/sidebar.css";

const Sidebar = () => {
    const [activeSection,setActiveSection] = useState('Home');

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const navHighlighter = () => {
            let scrollY = window.scrollY;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight;
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector(".navigation a[href='#" + sectionId + "']").classList.add("active");
                } else {
                    document.querySelector(".navigation a[href='#" + sectionId + "']").classList.remove("active");
                }
            });
        };

        window.addEventListener("scroll", navHighlighter);

        return () => {
            window.removeEventListener("scroll", navHighlighter);
        };
    }, []);

    return (
        <div className="side-bar">
            <div className="intro">
                <div className="home-text-cont">
                    <div className="hello-text">Hello, My Name Is: </div>
                        <h2 className="connorhise">Connor Hise</h2>
                        <div className="home-text">I am a Computer Engineer with experience in a wide breadth of fields ranging from Embedded Systems to Full Stack Web Development. </div>
                    </div>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <a href="#Home" className={ activeSection === 'Home' ? 'active':' '}>About Me</a>
                        <a href="#Projects"className={ activeSection === 'Projects' ? 'active':' '}>Projects</a>
                        <a href="#Experience"className={ activeSection === 'Experience' ? 'active':' '}>Experience</a>
                        <a href="#Contact"className={ activeSection === 'Contact' ? 'active':' '}>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="Contact Links">Links here</div>
        </div>
    );
};

export default Sidebar;


                        {/* <a href="#About"className={ activeSection === 'About' ? 'active':' '}>About Me</a> */}