import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Home = () => {

        return (
            <Container className={"home"}>
                <h3>Welcome to the Emotion Logger!</h3>
                <h4>Please, sign up or log in to log, chart, and track your emotions</h4>
                <h4><Link to="/sign-up" style={{color: "white"}}> Sign up</Link> - or - <Link to="/log-in" style={{color: "white"}}>Log in</Link></h4>
                
            </Container>

        );
}

export default Home;