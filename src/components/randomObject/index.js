import React from 'react';
import cs from 'classnames';
import "./index.css";


const RandomObject = ({shape,weight,top,right,onKeyDown,left}) => {

    const renderShape = () => {
        switch (shape) {
            case 1:
                return <div className={cs("triangle",`weight-${weight}`)}><div className="text">{weight}</div></div>;
            case 2:
                return <div className={cs("rectangle",`weight-${weight}`)}>{weight}</div>;
            default:
                return <div className={cs("circle",`weight-${weight}`)}>{weight}</div>;
        }
    };
    const style= {
        position: 'absolute',
        bottom: '0',
        fontSize: '13px',
        right: `${right}px`,
        left: `${left}px`,
        top:  `${top}px`,
    };
    return (
        <div style={style} onKeyDown={onKeyDown} tabIndex="0">
           {renderShape()}
        </div>
    );
};


export default RandomObject;