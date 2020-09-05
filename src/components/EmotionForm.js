import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const EmotionForm = (props) => {

        return (

          <Card style={{ width: '9rem' }}>
            <Card.Body>
              <Card.Title><p className="gradient">{props.name}: </p></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <div data-name={props.name}>
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
              </ListGroup.Item>
            </ListGroup>
          </Card>
        );
}

export default EmotionForm;
