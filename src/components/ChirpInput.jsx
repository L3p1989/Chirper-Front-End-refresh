import React, { useState } from 'react';

const ChirpInput = ({ setChirps }) => {

    const [id, setId] = useState(3);

    const [name, setName] = useState('');

    const [text, setText] = useState('');

    const [chirpsArray, setChirpsArray] = useState([]);

    const handleClick = (e) => {
        let newChirp = {
            id: id,
            name: name,
            text: text
        };

        let array = chirpsArray;

        array.unshift(newChirp);

        setChirpsArray(array);

        setId(id + 1);

        setChirps(chirpsArray);
        
        e.preventDefault()
    }

    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <input type="text" id="chirp-name" placeholder="Username" onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="chirp-text" placeholder="Say something" onChange={e => setText(e.target.value)}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" id="chirp-btn" onClick={handleClick}>Chirp It!</button>
                </div>
            </form>
        </div>
    );
}

export default ChirpInput;