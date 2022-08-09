import React from 'react';
import { Nav } from 'react-bootstrap';
import { useState } from 'react';
import PersonalInfo from '../components/PersonalInfo';
import Troubleshooting from '../components/Troubleshooting';
import SearchQuestions from '../components/SearchQuestions';
import UserInteractions from '../components/UserInteractions';

const FAQ = () => {
  // All static info?
  const [activeElement, setActiveElement] = useState('personalinfo');

  return (
    <div>
      <div 
        style={{
        border: '1px solid black',
        margin: '0 auto',
        marginTop: '5%',
        width: '50%',
        height: '70vh',
        }}>
        
        <Nav style={{ width: '100%', border: '1px solid black' }} variant='pills' defaultActiveKey='/faq'>

            <Nav.Item>
                <Nav.Link href="/faq" onClick={() => setActiveElement('personalinfo')}>Personal Info</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey='link-1' onClick={() => setActiveElement('troubleshooting')}>Troubleshooting</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={() => setActiveElement('searchQuestions')}>Search Questions</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="link-3" onClick={() => setActiveElement('userInteractions')}>User Interactions</Nav.Link>
            </Nav.Item>
        </Nav>

        {activeElement === 'personalinfo' && <PersonalInfo />}
        {activeElement === 'troubleshooting' && <Troubleshooting />}
        {activeElement === 'searchQuestions' && <SearchQuestions />}
        {activeElement === 'userInteractions' && <UserInteractions />}

      </div>
    </div>
  );
};

export default FAQ;
