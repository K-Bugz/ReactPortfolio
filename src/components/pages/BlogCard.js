import React from 'react';

export default function BlogCard(props) {
  return (
    <React.Fragment>
        <div className="container">
            <div className="flip-card-post">
                <div className="flip-card-post-inner">
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
    </React.Fragment>
  );
}
