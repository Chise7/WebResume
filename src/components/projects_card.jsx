import React from 'react';
import "../styles/projects_card.css";

const Projects_Card = (props) =>{
    return(
        <div className="card">
            <img src = { props.picture } className="card-image"></img>
            <h2 className="card-title">{ props.title }</h2>
            <div className="card-text">{ props.text }</div>
        </div>
    );
};

export default Projects_Card;