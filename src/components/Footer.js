import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = (props) => {

        return (
            <Container className={"footer"}>
                <span className={"footer-text"} >
                        "This being human is a guest house.
                        Every morning a new arrival.

                        A joy, a depression, a meanness,
                        some momentary awareness comes
                        as an unexpected visitor.
                        
                        Welcome and entertain them all!
                        Even if they’re a crowd of sorrows,
                        who violently sweep your house
                        empty of its furniture,
                        still, treat each guest honorably.
                        He may be clearing you out
                        for some new delight.
                    

                        The dark thought, the shame, the malice,
                        meet them at the door laughing,
                        and invite them in.

                        Be grateful for whoever comes,
                        because each has been sent
                        as a guide from beyond."
                        - Rumi, "The Guest House"
                </span>
                    
            </Container>

        );
}

export default Footer;