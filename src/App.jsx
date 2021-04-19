import React, { useEffect, useState } from "react";
import ChirpInput from './components/ChirpInput';
import Timeline from "./components/Timeline";

const App = () => {

    const [chirps, setChirps] = useState([
        {
            id: 2,
            name: "Someone famous in Source Title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        },
        {
            id: 1,
            name: "Someone famous in Source Title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        },
        {
            id: 0,
            name: "Someone famous in Source Title",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
        }
    ]);

    return(
        <div>
            <h1 className="text-center mb-5">Chirper</h1>
            <ChirpInput chirps={chirps} setChirps={setChirps} />
            <Timeline chirps={chirps} />
        </div>
    );
};

export default App;