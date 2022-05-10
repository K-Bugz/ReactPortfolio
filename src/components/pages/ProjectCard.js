import React from 'react';

export default function ProjectCard(props) {
  return (
    <div className="container">
        <a href={props.link} target="_blank" rel="noreferrer noopener">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h2 className="card-title">{props.title}</h2>
                        <img className='project-img' src={props.img} alt={props.title}></img>
                    </div>
                    <div className="flip-card-back">
                        <p>{props.des}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
  );
}
