import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Container';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import '../happy-icon-small.png';
import { Link } from 'react-router-dom';

//This is a stateless presentational component drop down that is mostly a whole bunch of bootstrapping
// but in here I am using react-router-dom links to navigate to diff client side routes


const makeLinks = arrayOfNames => {
  return arrayOfNames.map(name => {
    return (
      <div key={name}>
      <Link to={`/${name}`}><span className={"drop-down-text"}>{name}</span></Link><br />
      </div>
    )
  })
}


const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <Link to="/"><span className={"drop-down-text"}>home</span></Link><br/>
        <Link to="/emotion-log"><span className={"drop-down-text"}>log emotions</span></Link><br/>
        <Link to="/emotion-chart"><span className={"drop-down-text"}>All Emotion Bar Chart</span></Link><br/>
        <span>Line Charts</span><br />
        {makeLinks(["Fear", "Anger", "Sadness", "Anxiety", "Happiness", "Peacefulness", "Gratitude"])}
      </Popover.Content>
    </Popover>
  );



const DropDown = () => {

        return (
            <Container className="right-align">
                <Row>
                    <Col xs={6} md={4}>
                        <OverlayTrigger trigger="click" rootClose placement="left" overlay={popover}>
                            <Image src={require('../happy-icon-small.png')} roundedCircle={true} />
                        </OverlayTrigger>
                    </Col>
                    <Col xs={6} md={4} >
                    <h4>click me for menu^ </h4>
                    </Col>
                </Row>
            </Container>

        );
}

export default (DropDown);