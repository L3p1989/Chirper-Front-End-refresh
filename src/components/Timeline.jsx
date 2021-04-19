import React from 'react';
import Chirp from './Chirp';

const Timeline = ({ chirps }) => {

    return(
        <div className="container" id="timeline">
            {chirps.map(chirp => (
                <Chirp key={chirp.id} name={chirp.name} text={chirp.text} />
            ))}
        </div>
    );
}

export default Timeline;