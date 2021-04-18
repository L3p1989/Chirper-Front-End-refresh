import React from 'react';

const ChirpInput = () => {

    return(
        <div className="container">
            <form>
                <input type="text" placeholder="Say something"/>
                <button type="submit" className="btn primary">Chirp It!</button>
            </form>
        </div>
    );
}

export default ChirpInput;