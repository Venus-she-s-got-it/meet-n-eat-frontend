import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

const Troubleshooting = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I forgot my password!</Accordion.Header>
                        <Accordion.Body>
                        Please email us with your username and we will send you a link to recover your password. 
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>I don't see any search results</Accordion.Header>
                    <Accordion.Body>
                    It is possible that you selected filters that do not match any restaurants. Adjust your filters and try your search again.
                    </Accordion.Body>

                </Accordion.Item>
                
                <Accordion.Item eventKey="2">
                    <Accordion.Header>I found a broken page</Accordion.Header>
                    <Accordion.Body>
                    If you would like to report a broken page or a bug, please email us with a description of the problem that you're experiencing and we'll work on resolving it.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Troubleshooting;