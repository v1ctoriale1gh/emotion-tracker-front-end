import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, logoutUser } from '../actions';
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class UserSignup extends Component {

    state = {
        name: '',
        username: '',
        password: '',
        }
      

      handleInput = (e) => {
        let value = e.target.value
        let inputName = e.target.name
        this.setState(
            {[inputName]: value})
      }

      componentDidMount() {
        this.props.logoutUser()
    }

      handleSubmit = (e) => {
          this.props.addUser(this.state)
      }

      componentDidUpdate() {
        !!this.props.user.id && this.props.history.push('/emotion-log')
    }

      

    render() {
        return(
            <div className={'user-cards'}>
            <Container style={{ width: '15rem' }}>
            <Card >
                <Card.Header>Sign Up</Card.Header>
                <Card.Body>
                    <p className={'errors'}>{this.props.error}</p>
                    <form>
                    <input type="text" name="username" onChange={this.handleInput} placeholder="Enter a Username" /><br />
                    <input type="text" name="name" onChange={this.handleInput} placeholder="Enter your first name" /><br />
                    <input type="password" name="password" onChange={this.handleInput} placeholder="Password" /><br /><br />
                    <Button variant="outline-secondary" size="sm" onClick={this.handleSubmit}>Sign Up</Button>
                    </form>
                </Card.Body>
            </Card>
            </Container>
            </div>
        )
    }

};


function mapStateToProps(state) {
    return {
        error: state.user.signuperror,
        user: state.user
    }
}

export default connect(mapStateToProps, { addUser, logoutUser })(UserSignup);