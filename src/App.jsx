import React from "react";
import ChirpInput from './components/ChirpInput';
import Timeline from "./components/Timeline";

const App = () => {
    return(
        <div>
            <h1 className="text-center mb-5">Chirper</h1>
            <ChirpInput />
            <Timeline />
        </div>
    );
};

export default App;