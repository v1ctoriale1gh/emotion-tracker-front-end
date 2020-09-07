import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {

        return (
            <Container className={"home"}>
                <h3>Welcome to the Emotion Logger!</h3>
                <h4>Please, sign up to log, chart, and track you emotions</h4>
                MAKE THESE LINKS NOT BUTTONS THIS IS UGLY <br />
                <Link to="/sign-up"><Button variant="outline-light" size="sm">Sign up</Button></Link>
                    <br /><br />
                    <h4>Already have an account?</h4>
                <Link to="/log-in"><Button variant="outline-light" size="sm">Log in</Button></Link>
                
            </Container>

        );
}

export default Home;