import React from 'react';
import "../styles/projects_card.css";

const Projects_Card = (props) =>{
    return(
        <div className={`card ${props.expanded ? 'expanded' : ''}`} onClick={()=>props.onToggle(props.id)}>
            <img src = { props.picture } className="card-image"></img>
            <h2 className="card-title">{ props.title }</h2>
            <div className="card-text">{ props.text }</div>
            <div className="card-info-cont">
                <div className="technologies">{props.technologies}</div>
                <div className="summary">{props.summary}</div>
                {/* <div>See More: {props.link}</div> */}
            </div>
        </div>
    );
};

export default Projects_Card;