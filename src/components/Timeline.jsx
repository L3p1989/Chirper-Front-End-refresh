import React, { useEffect, useState } from 'react';
import Chirp from './Chirp';

const Timeline = ({ chirps }) => {

    const [chirpArray, setChirpArray] = useState([]);

    useEffect(() => {
        setChirpArray(chirps)
    }, [chirps]);

    return(
        <div className="container" id="timeline">
            {chirpArray.map(val => (
                <Chirp key={val.id} name={val.name} text={val.text} />
            ))}
            <Chirp key="2" name="Someone famous in Source Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." />
            <Chirp key="1" name="Someone famous in Source Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." />
            <Chirp key="0" name="Someone famous in Source Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." />
        </div>
    );
}

export default Timeline;