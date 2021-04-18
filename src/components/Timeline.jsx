import React from 'react';
import Chirp from './Chirp';

const Timeline = props => {
    return(
        <div className="container" id="timeline">
           <Chirp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." name="Someone famous in Source Title" />
           <Chirp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." name="Someone famous in Source Title" />
           <Chirp text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." name="Someone famous in Source Title" />
        </div>
    );
}

export default Timeline;