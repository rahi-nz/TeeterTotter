import React, {useEffect, useRef} from 'react';
import cs from 'classnames';
import "./index.css";
import {useDispatch} from "react-redux";
import {getInnerHeight} from "../../store/action";


const RandomObject = ({shape,weight,top,right,onKeyDown,left}) => {
    const dispatch = useDispatch();
    const element = useRef();
    const renderShape = () => {
        switch (shape) {
            case 3:
                return <div className={cs("triangle",`weight-${weight}`)} ref={element}><div className="text">{weight}</div></div>;
            case 2:
                return <div className={cs("rectangle",`weight-${weight}`)} ref={element}>{weight}</div>;
            default:
                return <div className={cs("circle",`weight-${weight}`)} ref={element}>{weight}</div>;
        }
    };
    
    useEffect(() => {
        if(top !== null) {
            dispatch(getInnerHeight(element.current.clientHeight))
        }
    });

    const style= {
        position: 'absolute',
        bottom: '0',
        fontSize: '13px',
        right: `${right}px`,
        left: `${left}px`,
        top:  `${top}px`,
    };
    return (
        <div style={style} onKeyDown={onKeyDown} tabIndex="0" >
           {renderShape()}
        </div>
    );
};


export default RandomObject;