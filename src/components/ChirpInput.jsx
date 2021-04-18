import React from 'react';

const ChirpInput = () => {

    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <input type="text" id="chirp-name" placeholder="Username" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="chirp-text" placeholder="Say something"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" id="chirp-btn">Chirp It!</button>
                </div>
            </form>
        </div>
    );
}

export default ChirpInput;