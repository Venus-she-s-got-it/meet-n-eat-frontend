import React from 'react'
import { Card, InputGroup, Form, Button, ListGroup } from 'react-bootstrap'

const Friends = ( {username, displayname, profileimg} ) => {

return (
                    <Card style={{ width: '100%',display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'1%', marginBottom:'3%' }}>
                        <div style={{ width:'20%'}} >      
                        <Card.Img style={{ width:'90%', borderRadius:'5px' }} variant="top" src={profileimg}/>
                        </div>
                        <Card.Body>
                            <Card.Text>{username}</Card.Text>
                        </Card.Body>
                            <Card.Text>{displayname}</Card.Text>
                    </Card>
)
}

export default Friends