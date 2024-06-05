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
            <nav className="navigation">
                <ul>
                    <li>
                        <a href="#Home" className={ activeSection === 'Home' ? 'active':' '}>Home</a>
                        <a href="#Projects"className={ activeSection === 'Projects'? 'active':' '}>Projects</a>
                        <a href="#WorkExperience"className={ activeSection === 'Experience'? 'active':' '}>Experience</a>
                        <a href="#AboutMe"className={ activeSection === 'About'? 'active':' '}>About Me</a>
                        <a href="#Contact"className={ activeSection === 'Contact'? 'active':' '}>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;