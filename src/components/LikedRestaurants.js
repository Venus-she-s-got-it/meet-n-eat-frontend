import React from 'react'
import { Card, Button, InputGroup, Offcanvas, ListGroup, Form } from 'react-bootstrap'
import { useState } from 'react'

const LikedRestaurant = ( {name, title, display_phone, price, state, city, address1, photos} ) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
                        <Card style={{ width: '100%',display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'1%', marginBottom:'5%'}}>
                            <div style={{ width:'20%'}} >      
                            <Button style={{ }} onClick={handleShow}>
                                <Card.Img style={{ width:'100%', borderRadius:'5px' }} variant="top" src={photos} />
                            </Button>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <div>
                                    <Card style={{ width: '90%', margin:'0 auto' }}>
                                        <Card.Img variant="top" src={photos} />
                                        <Card.Body>
                                            <Card.Title>{name}</Card.Title>
                                            <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content. </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item><svg style={{ width:'20px' }} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>{address1}, {city}, {state}</ListGroup.Item>
                                            <ListGroup.Item>{display_phone}</ListGroup.Item>
                                            <ListGroup.Item>Type: {title} <span style={{float:'right'}}>Price: {price}</span></ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                    </div>
                                    </Offcanvas.Header>
                            </Offcanvas>
                            </div>
                            <Card.Body>
                                <Card.Text>{name}</Card.Text>
                            </Card.Body>
                                <ListGroup.Item>{price}</ListGroup.Item>
                        </Card>
)
}

export default LikedRestaurant