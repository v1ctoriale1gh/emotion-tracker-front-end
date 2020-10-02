import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class ClickButton extends Component {
    state = {
        number: 0
    }

    handleClick = () => {
        //let newNum = this.state.number + 1
        //this.setState({number: this.state.number + 1})
        console.log('a');

        fetch(`http://localhost:3000/usersfjdskljfldss/1/logsfdjkljfdslkjdls`)
            .then(resp => { 
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                }
                console.log('b', resp);
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))
        
        console.log('e: out of the fetch');

        // a, e, b, d
    }


    render(){ 
        return(
            <>
            <Button onClick={this.handleClick}>Click Me</Button><br />
            <span>{this.state.number}</span>
            </>
        )
    }
}

export default ClickButton;
