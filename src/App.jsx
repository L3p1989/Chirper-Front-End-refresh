import React, { useEffect, useState } from "react";
import ChirpInput from './components/ChirpInput';
import Timeline from "./components/Timeline";

const App = () => {

    const [chirps, setChirps] = useState([]);

    return(
        <div>
            <h1 className="text-center mb-5">Chirper</h1>
            <ChirpInput setChirps={setChirps} />
            <Timeline chirps={chirps} />
        </div>
    );
};

export default App;