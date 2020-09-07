import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  { loginUser, logoutUser } from '../actions/index';


class UserLogin extends Component {

    state = {
        username: '',
        password: ''
        }
      

      handleInput = (e) => {
        let value = e.target.value
        let inputName = e.target.name
        this.setState(
            {[inputName]: value})
      }

      handleSubmit = (e) => {
        this.props.loginUser(this.state)
      }

      componentDidMount() {
          this.props.logoutUser()
      }

      componentDidUpdate() {
          !!this.props.user.id && this.props.history.push('/emotion-log')
      }

      

    render() {
        return(
            <div className={'user-cards'}>
            <Container style={{ width: '15rem' }}>
            <Card >
                <Card.Header>Log in</Card.Header>
                <Card.Body>
                    <p className={'errors'}>{this.props.error}</p>
                    <form>
                    <input type="text" name="username" onChange={this.handleInput} placeholder="Enter a Username" /><br />
                    <input type="password" name="password" onChange={this.handleInput} placeholder="Password" /><br /><br />
                    <Button variant="outline-secondary" size="sm" onClick={this.handleSubmit}>Log in</Button>
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
        error: state.user.loginerror,
        user: state.user
    }
}

export default connect(mapStateToProps, { loginUser, logoutUser })(UserLogin);