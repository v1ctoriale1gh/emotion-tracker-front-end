import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//stateless presentational component

const EmotionForm = (props) => {


  //make an array of numbers and for each one put in the passed in props from it's parent component
  //numberclick that changes it's css and sets parent component local state
  function composeNumberSpans() {
    let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return numArray.map(num => <span key={num} onClick={props.numberClick}>{num} </span>)
  }

        return (

          <Card style={{ width: '9rem' }}>
            <Card.Body>
              <Card.Title><p className="gradient">{props.name}: </p></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <div data-name={props.name}>
                {composeNumberSpans()}
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        );
}

export default EmotionForm;
