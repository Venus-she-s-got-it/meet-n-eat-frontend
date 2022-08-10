import React from 'react';
import Accordion from 'react-bootstrap/Accordion'

const SearchQuestions = () => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do I use the filters in the search bar?</Accordion.Header>
                        <Accordion.Body>
                        Select your city, category or cuisine of your choice, and the price range you'd like, then enter your search in the "find restaurants" search bar to search using filters
                        </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>How can I change my location?</Accordion.Header>
                    <Accordion.Body>
                    By navigating to the home page, selecting filters, and opening the dropdown menu called "select city", you can change the area that you are searching for restaurants.
                    </Accordion.Body>

                </Accordion.Item>
                
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What areas does Meet-N-Eat support?</Accordion.Header>
                    <Accordion.Body>
                    We currently only support some major cities in California, but are looking into expanding our areas in the future.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default SearchQuestions;