//import react component for lifecycle methods
import React, { Component } from 'react';
//import individual emotion component
import EmotionForm from './EmotionForm.js';
//import some bootstrapping
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { addLog } from '../actions';
import UserLogin from './UserLogin.js';



class Form extends Component {

    //alternate syntax... apparently you dont need to use a contstructor you can just say
    //state = {} and dump it on the ground in the the component
    constructor() {
        super();
        this.state = {
            Fear: '0',
            Anger: '0',
            Sadness: '0',
            Anxiety: '0',
            Happiness: '0',
            Peacefulness: '0',
            Gratitude: '0'
        };
    };


    //onClick clallback method to be passed down to child component,
    //takes a chosen number and changes the css,
    //if the number hasn't been clicked it sets the state,
    //if it's being clicked again, it sets the state to 0
    numberClick = (e) => {
        e.persist();
        if (e.target.className === "chosen-number") {
            e.target.className = ""
            this.setState({
                [e.target.parentElement.dataset.name]: '0'
            });
        } else {
            e.target.className = "chosen-number"
            this.setState({
                [e.target.parentElement.dataset.name]: e.target.innerText.split(" ")[0]
            });
        }
    }

    //on submit of form (bootstrap button) use addLog action creator from mDTP, pass in the user's ID, and local state 
    handleSubmit = () => {
        this.props.addLog(this.state, this.props.user.id);
        //time out here because it takes about one second for everything to load in the back end, and I was having issues where it was trying
        //to render the emotions chart of=n the following page before backend process was completing
        //then creating errors on the data formation that I'm making to pass into to google API
        //so set this time out to wait then push forward to emotion log on submit
        ///..... I think I should possibly be doing this in my action creator... (but was confused about where I had access to my router props...)
        // REVIEWER? WHERE IS THE CORRECT PLACE TO DO THIS, IS THIS RIGHT?
        setTimeout(() => {
              this.props.history.push('/emotion-chart'); }, 1000);
        
    }


    //function to compose each emotion component with a diff emotion name and pass in number click method
    composeEmotionForms = (nameArray) => {
    return nameArray.map(name => <EmotionForm key={name} name={`${name}`} numberClick={this.numberClick} />)
    }


    render() {
        return( 
            <div className="center-align">
                {this.props.user.id ?
                <div>
                <h3>Hello, { this.props.user.name }!  Click on the number correlating to the level of intensity of your emotions:</h3>
                <h4>0 being not at all and 10 being very intense</h4>
                <Container>
                <CardGroup >
                    {this.composeEmotionForms(["Fear", "Anger", "Sadness"])}
                </CardGroup><CardGroup>
                    {this.composeEmotionForms(["Anxiety", "Happiness", "Peacefulness", "Gratitude"])}
                </CardGroup>
                </Container>
                <br />
                <Button className={"submit-button"} variant="outline-light" size="lg" onClick={this.handleSubmit}>Submit My Emotion Log!</Button>
                </div>
                 :
                <UserLogin /> }
            </div>
        )
    };

}

//lets get that user from redux store global state

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

//lets connect that component and pass in that action creator

export default connect(mapStateToProps, { addLog })(Form);