import React from 'react'
import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { UrlContext } from '../App'
import Message from '../components/Message'
import { Button, Form, InputGroup, Card, ListGroup, ButtonGroup } from 'react-bootstrap'


const MessageCenter = () => {

const url = useContext(UrlContext)

//messages
const [messages, setMessages] = useState(null)
//requests
const [requests, setRequests] = useState(null)

useEffect ( () => {
    axios.get('http://localhost:8000/messages')
    .then((res) => {
        setMessages(res.data)
        console.log(res.data)
        
    })
    
    // need a requests property? 
    axios.get('http://localhost:8000/users', requests)
    .then((res) => {
        // setRequests(res.data.requests??)
    })
},[]) 

// messages[0].sender.username

// messages[0].body


return (
    <div style={{ border:'1px solid black', margin:'2%', height:'90vh', display:'flex', flexDirection:'row' }} className="message-center">
        <div style={{ border:'1px solid black', width:'55%', margin:'2%', display:'flex', flexDirection:'column', alignItems:'center'}} className='message-section'>
            <InputGroup style={{ margin:'2%', width:'60%' }} className="mb-3">
                <Form.Control placeholder="Search in messages" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <Button variant="outline-secondary" id="button-addon2"> Search </Button>
            </InputGroup>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }} className='messages-area'>
                <Card style={{ width: '70%',display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'1%' }}>
                    <div style={{ width:'20%'}} >      
                    <Card.Img style={{ width:'60%' }} variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <Card.Text>{messages && messages[0].sender.username}</Card.Text>
                    </div>
                    <Card.Body>
                        <Card.Text>{messages && messages[0].body}</Card.Text>
                    </Card.Body>
                        <ListGroup.Item>{messages && messages[0].updatedAt}</ListGroup.Item>
                </Card>
            </div>
                <div>
                    {/* {messages && messages.map((message) => <Message message={message} key={message._id}/>)} */}
                </div>      
        </div>
        <div style={{ border:'1px solid black', margin:'2%', width:'35%', display:'flex', flexDirection:'column', alignItems:'center'}} className='requests-section'>
        <Card style={{ width: '70%',display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'1%' }}>
                    <div style={{ width:'20%'}} >      
                    <Card.Img style={{ width:'60%' }} variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <Card.Text>{messages && messages[0].recipients[0].username}</Card.Text>
                    </div>
                    <Card.Body>
                    <ButtonGroup style={{float:'right', display:'flex', justifyContent:'space-around', width:'80%'}} aria-label="Basic example">
                        <Button style={{ borderRight:'3px solid white' }} variant="secondary">Confirm</Button>
                        <Button variant="secondary">Delete</Button>
                    </ButtonGroup>
                    </Card.Body>
                </Card>
            {/* map requests and display 'Friend Request Component' */}
        </div>

    </div>
)
}

export default MessageCenter