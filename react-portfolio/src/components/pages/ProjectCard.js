import React from 'react';

export default function ProjectCard(props) {
  return (
    <div class="container">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h2 className="card-title">Title: {props.title}</h2>
                    <img className='project-img' src={props.img} alt='blah'></img>
                </div>
                <div class="flip-card-back">
                    <p>{props.des}</p>
                </div>
            </div>
        </div>
    </div>
  );
}
