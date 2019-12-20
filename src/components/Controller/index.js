import React from 'react';
import "./index.css";


const Controller = ({startGame,name,rightWeight,leftWeight,rightDistance, leftDistance}) => {
    return (
        <div className="controller">
            <div className="details"><p>weight:{leftWeight}</p><p>distance:{leftDistance}</p></div>
            <button onClick={startGame}>{name}</button>
            <div className="details"><p>weight:{rightWeight}</p><p>distance: {rightDistance}</p></div>
        </div>
    );
};


export default Controller;