import React, {useEffect, useState } from 'react';
import "./index.css";
import Controller from "../Controller";
import { getLeftPosition, getRightPosition, getRightWeight,getLeftWeight } from "../../store/action";
import {useDispatch, useSelector} from "react-redux";
import LeftSide from "../leftSide";
import RightSide from "../rightSide";

const TeeterTotter = () => {
    const dispatch = useDispatch();
    const rightWeight = useSelector(state => state.rightWeight);
    const leftWeight = useSelector(state => state.leftWeight);
    const [start, setStart] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [rightObj, setRightObj] = useState();
    const [leftObj, setLefttObj] = useState();
    const [bending, setBending] = useState(0);

    const startGame = () => {
        setStart(prevState => {return !prevState});
        setGameOver(false);
        setBending(0);
        dispatch(getRightPosition(shapePosition()*55));
        dispatch(getLeftPosition(shapePosition()*55));
        dispatch(getLeftWeight(shapeWeight()));
        dispatch(getRightWeight(shapeWeight()));
        setRightObj(CreateShape());
        setLefttObj(CreateShape());
    };

    const rightObject = useSelector(state => state.rightPosition);
    const right = useSelector(state => state.leftPosition);
    const left = useSelector(state => state.leftPosition);


    const CreateShape = () =>{
        return Math.floor(Math.random() * 3) + 1
    };
    const shapeWeight = () => {
        return (Math.floor(Math.random() * 10) + 1).toString().concat('Kg');
    };
    const shapePosition = () => {
        return (Math.floor(Math.random() * 5) + 1);
    };
    const calculateBalance = () => {
        if(((rightWeight*rightObject) /(leftWeight*right)) ===1){
            setBending(0);
            setGameOver(false);
            setStart(false)
        } else if(((rightWeight*rightObject) /(leftWeight*right)) >= 3){
            setBending(30);
            setGameOver(true);
            setStart(false);
        }else if(((rightWeight*rightObject) /(leftWeight*right)) <= 3){
            setBending(-30);
            setGameOver(true);
            setStart(false);
        }
        return 50
    };
    /**
     * change object top position with arrow keys
     */
    const onKeyPressed = e => {
        switch (e.keyCode) {
            case 39:
                dispatch(getLeftPosition(right+55));
                break;
            case 37:
                dispatch(getLeftPosition(left-55));
                break;
            default:
                return true
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", e => onKeyPressed(e));
    });
    const style = {
        transform: `skew(10deg,${bending}deg)`
    };
    return (
        <div className="container">
            <Controller startGame={startGame} name={start ? 'Stop' : 'Start'}/>
            {!gameOver ?             <div className='container'>
                <div className="shapeContainer">
                    {
                        start && <>
                            <div className="leftSide">
                                <LeftSide shape={leftObj} right={right} left={left} onKeyPressed={onKeyPressed} calculateBalance={calculateBalance} weight={leftWeight}/>
                            </div>
                            <div className="rightSide">
                                <RightSide shape={rightObj} right={rightObject} weight={rightWeight} />
                            </div>
                        </>
                    }
                </div>
                <div className="barContainer" style={style}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>
                <div className='base'></div>
            </div> : <div>Game Over</div> }

        </div>
    );
};


export default TeeterTotter;