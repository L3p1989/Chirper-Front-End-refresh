import React from 'react';

const ChirpInput = () => {

    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Say something"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Chirp It!</button>
                </div>
            </form>
        </div>
    );
}

export default ChirpInput;