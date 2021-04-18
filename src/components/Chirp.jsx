import React from 'react';

const Chirp = props => {
    return(
        <div className="card mb-3">
            <div className="card-header">{props.name}</div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                <p>{props.text}</p>
                </blockquote>
        </div>
    </div>
    );
}

export default Chirp;