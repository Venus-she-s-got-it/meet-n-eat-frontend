import React from 'react'
import { Nav } from 'react-bootstrap'

const FAQ = () => {

// All static info?

return (
    <div>FAQ Section
        <div style={{ border:'1px solid black', margin:'0 auto', marginTop:'5%', width:'50%', height:'70vh' }}>
            <Nav style={{ width:'100%', border:'1px solid black' }} variant="pills" defaultActiveKey="/faq">
                <Nav.Item>
                    <Nav.Link href="/faq">FAQ Section 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">FAQ Section 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"> FAQ Section 3 </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    </div>
)
}

export default FAQ  