import React, { Component } from 'react';
import EmotionForm from './EmotionForm.js';


class Form extends Component {

    constructor() {
        super();
        this.state = {
            Fear: '0',
            Anger: '0',
            Sadness: '0',
            Anxiety: '0',
            Happiness: '0',
            Peacefulness: '0',
            Gratitude: '0',
        };
    };

    callBackForOnChange = (start) => {
        return console.log(start);
    };

    render() {
        return(
            <div>
                <EmotionForm name={"Fear"}/>
            </div>
        )
    };
};

export default Form;