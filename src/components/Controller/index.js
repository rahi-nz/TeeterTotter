import React from 'react';
import "./index.css";


const Controller = ({startGame,name}) => {
    return (
        <div className="controller">
            <button onClick={startGame}>{name}</button>
        </div>
    );
};


export default Controller;