//uses lifecycle methods, imports component from react
import React, { Component } from 'react';
//connects to redux store
import { connect } from 'react-redux';
//imports some bootstrapping
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//imports login and logout action creators
import  { loginUser, logoutUser } from '../actions/index';


class UserLogin extends Component {

    //STEP 1. set the original state
    state = {
        username: '',
        password: ''
        }
      
    //controlled form - on change of the value on the input i set the key and the value from the event and set the state
      handleInput = (e) => {
        let value = e.target.value
        let inputName = e.target.name
        this.setState(
            {[inputName]: value})
      }

      //Don't have to prevent default because i'm using an onclick on a bootstrap button but, this uses the log in action creator from 
      //mDTP 
      handleSubmit = (e) => {
        this.props.loginUser(this.state)
      }

    //2. LOG OUT A CURRENT USER- using action creactor & mDTP/redux store otherwise the component did update will push the history forward from the previous user 
    //(yes I know this is a hackey way to do this) and when and if I pass project review I will probably change my drop down component to do this upon click of 
    //a log out button but for sake of meeting project requirements an amount of stateless components I left the dropdown component unconnected to the redux store.....
      componentDidMount() {
          this.props.logoutUser()
      }

    //after handle submit, when the component updates if it has an id in the user rather than an error it will
    //push the window history to the emotion log(passed in by router props in app.js)
      componentDidUpdate() {
          !!this.props.user.id && this.props.history.push('/emotion-log')
      }

      

    render() {
        return(
            <div className={'user-cards'}>
            <Container style={{ width: '18rem' }}>
            <Card >
                <Card.Header>Log in</Card.Header>
                <Card.Body>
                    {/* this is how I render errors, doesn't show if there are not any in global state/props */}
                    <p className={'errors'}>{this.props.error}</p>
                    <form>
                    <input type="text" name="username" onChange={this.handleInput} placeholder="Enter a Username" value={this.state.username}/><br />
                    <input type="password" name="password" onChange={this.handleInput} placeholder="Password" value={this.state.password}/><br /><br />
                    <Button variant="outline-secondary" size="sm" onClick={this.handleSubmit}>Log in</Button>
                    </form>
                </Card.Body>
            </Card>
            </Container>
            </div>
        )
    }

};

//map an arror to props if an error is in global state from log in
//or map a user onto state after loginUser on submit
//this happens even if there was a previous user... hence the hackey log out in componentDidMount
function mapStateToProps(state) {
    return {
        error: state.user.loginerror,
        user: state.user
    }
}

//connect this component to redux store... loginUser and logOut user passed in to mapDispatchtoProps
export default connect(mapStateToProps, { loginUser, logoutUser })(UserLogin);