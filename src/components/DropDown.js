import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Container';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import '../happy-icon-small.png'

const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <span>menu</span><br/>
        <span>menu</span><br/>
        <span>menu</span>
      </Popover.Content>
    </Popover>
  );



const DropDown = (props) => {

        return (
            <Container className="right-align">
                <Row>
                    <Col xs={6} md={4}>
                        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                            <Image src={require('../happy-icon-small.png')} roundedCircle={true} onClick={props.onClickForDropDown}/>
                        </OverlayTrigger>
                    </Col>
                    <Col xs={6} md={4} >
                    <h4>click me for menu^ </h4>
                    </Col>
                </Row>
            </Container>

        );
}

export default DropDown;