import React from 'react';

export default function BlogCard(props) {
  return (
    <div className="container">
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <h2 className="card-title">Title: {props.title}</h2>
                    <h3 className="date"> {props.date}</h3>
                </div>
                <div className="flip-card-back">
                    <p>{props.des}</p>
                </div>
            </div>
        </div>
    </div>
  );
}
