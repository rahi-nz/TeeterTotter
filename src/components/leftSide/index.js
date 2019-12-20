import React, {useEffect, useState} from 'react';
import RandomObject from "../randomObject";


const LeftSide = ({shape,left,right,onKeyPressed,calculateBalance,weight}) => {
    const [top, setTop] = useState(-50);

    /**
     * change object top position
     */
    useEffect(() => {
        const interval = setInterval(() => {
            if(top < 250) {
                const newTop= top + 10;
                setTop(newTop);
            } else {
                calculateBalance();
            }
        }, 300);
        return () => clearInterval(interval);
    });

    return (
        <RandomObject shape={shape} weight={weight} top={top} right={right} left={left} onKeyDown={onKeyPressed}/>
    );
};


export default LeftSide;