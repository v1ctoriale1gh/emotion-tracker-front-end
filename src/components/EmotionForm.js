import React from 'react';
import "../styles.css";

const EmotionForm = (props) => {

        return (
            <div data-name={props.name}>
                <p className="gradient">{props.name}: </p>
                <span onClick={props.numberClick}>0 </span> 
                <span onClick={props.numberClick}>1 </span> 
                <span onClick={props.numberClick}>2 </span>  
                <span onClick={props.numberClick}>3 </span>  
                <span onClick={props.numberClick}>4 </span>  
                <span onClick={props.numberClick}>5 </span>  
                <span onClick={props.numberClick}>6 </span>  
                <span onClick={props.numberClick}>7 </span>  
                <span onClick={props.numberClick}>8 </span>  
                <span onClick={props.numberClick}>9 </span>  
                <span onClick={props.numberClick}>10</span>
            </div>
        );
}

export default EmotionForm;
