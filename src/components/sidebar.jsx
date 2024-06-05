import React, { useEffect } from 'react';
import "../styles/sidebar.css";

const Sidebar = () => {
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
            <nav className="navigation">
                <ul>
                    <li>
                        <a href="#Home" className="active">Home</a>
                        <a href="#Projects">Projects</a>
                        <a href="#WorkExperience">Work Experience</a>
                        <a href="#AboutMe">About Me</a>
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;