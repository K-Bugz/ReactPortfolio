import React from 'react';

export default function BlogCard(props) {
  return (
    <div class="container">
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <h2 className="card-title">Title: {props.title}</h2>
                    <h3 className="date"> {props.date}</h3>
                </div>
                <div class="flip-card-back">
                    <p>{props.des}</p>
                </div>
            </div>
        </div>
    </div>
  );
}
