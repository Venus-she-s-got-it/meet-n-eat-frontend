import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

const UserInteractions = () => {
    return (
        <div>
            <Accordion variant='alert'>

                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do I set up a meeting with someone?</Accordion.Header>
                        <Accordion.Body>
                        On another user's page, pick a restaurant and invite them to a meet up.  
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>How do I add/remove a friend?</Accordion.Header>
                    <Accordion.Body>
                    Navigate to your friends list and click the "remove" button.
                    </Accordion.Body>

                </Accordion.Item>
                
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Where can I view another user's schedule?</Accordion.Header>
                    <Accordion.Body>
                    Click on their picture to go to their profile and look on the right side of their profile page to view their itinerary.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>

        </div>
    );
};

export default UserInteractions;