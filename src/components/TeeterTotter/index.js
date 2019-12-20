import React, { useState,useRef } from 'react';
import "./index.css";
import Controller from "../Controller";
import { getLeftPosition, getRightPosition, getRightWeight,getLeftWeight } from "../../store/action";
import {useDispatch, useSelector} from "react-redux";
import LeftSide from "../leftSide";
import RightSide from "../rightSide";

const TeeterTotter = () => {
    const dispatch = useDispatch();
    const element = useRef();
    const rightWeight = useSelector(state => state.rightWeight);
    const leftWeight = useSelector(state => state.leftWeight);
    const [start, setStart] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [rightObj, setRightObj] = useState();
    const [leftObj, setLefttObj] = useState();
    const [bending, setBending] = useState(0);
    const barOffsetTop = element?.current?.offsetTop;

    const startGame = () => {
        setStart(prevState => {return !prevState});
        setGameOver(false);
        setBending(0);
        dispatch(getRightPosition(shapePosition()*55));
        dispatch(getLeftPosition(shapePosition()*55));
        dispatch(getLeftWeight(shapeWeight()));
        dispatch(getRightWeight(shapeWeight()));
        setRightObj(CreateShape());
        setLefttObj(Math.floor(Math.random() * 2) + 1);
    };
    /**
     * distance from object to middle of bar
     * @type {number}
     */
    const rightObject =  useSelector(state => state.rightPosition);
    const right = useSelector(state => state.leftPosition);
    const left = useSelector(state => state.leftPosition);
    const rightObjDistance= 6 - rightObject/55;
    const leftObjDistance= 6- right/55;

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
        const rightObjWeight= Number(rightWeight.slice(0,-2));
        const rightObjDistance= 6 - rightObject/55;
        const leftObjWeight= Number(leftWeight.slice(0,-2));
        const leftObjDistance= 6- right/55;

        if((leftObjWeight*leftObjDistance) /( rightObjWeight*rightObjDistance) === 1){
            setBending(0);
            setGameOver(false);
            setStart(false)
        } else if((leftObjWeight*leftObjDistance) /( rightObjWeight*rightObjDistance) >= 1){
            setBending(-30);
            setStart(false);
        }else if((leftObjWeight*leftObjDistance) /( rightObjWeight*rightObjDistance) < 1){
            setBending(30);
            setStart(false);
        } else if((leftObjWeight*leftObjDistance) /( rightObjWeight*rightObjDistance) >= 3){
            setBending(-30);
            setGameOver(true);
        } else if((leftObjWeight*leftObjDistance) /( rightObjWeight*rightObjDistance) >= 0.3){
            setBending(30);
            setGameOver(true);
        }
        return true
    };

    const style = {
        transform: `skew(10deg,${bending}deg)`
    };
    return (
        <div className="container">
            <Controller startGame={startGame} name={start ? 'Stop' : 'Start'} rightWeight={rightWeight} leftWeight={leftWeight} leftDistance={leftObjDistance} rightDistance={rightObjDistance}/>
            {!gameOver ?             <div className='container'>
                <div className="shapeContainer">
                    {
                        start && <>
                            <div className="leftSide">
                                <LeftSide shape={leftObj} right={right} left={left} calculateBalance={calculateBalance} weight={leftWeight} barOffsetTop={barOffsetTop}/>
                            </div>
                            <div className="rightSide">
                                <RightSide shape={rightObj} right={rightObject} weight={rightWeight} />
                            </div>
                        </>
                    }
                </div>
                <div className="barContainer" style={style} ref={element}>
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