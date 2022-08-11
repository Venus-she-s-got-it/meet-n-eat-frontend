import { useState, useContext, useEffect } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { Context } from '../App'
import axios from 'axios'
import Message from '../components/Message'
import FriendRequest from '../components/FriendRequest'

const dummyFriendRequest = [{
    _id: '62ed53ab80c7c665832e887a',
    sender: {
        _id: '62f1449c1cb9cddfe13009b6',
        displayname: 'Charles',
        profileimg: 'https://assets.entrepreneur.com/content/3x2/2000/20160901055636-ProfessorX.jpeg?crop=1:1'
    },
    recipient: {
        _id: '62ed53de80c5c665832c8882',
    },
    message: "Hi, I saw that you also like restaurants for gifted youngsters.  Let's be friends!",
    createdAt: '2022-08-05T19:05:22.934Z'
}]

const MessageCenter = () => {
// ID of currently logged in user (will be implemented later)
const userId = '62ed53ae80c5c665832c887d'
const { defaultImage } = useContext(Context)
const [messages, setMessages] = useState(null)
const [requests, setRequests] = useState(dummyFriendRequest)

useEffect ( () => {
    // Get messages
    // axios.get(`${url}/messages`)
    // .then((res) => {
    //     setMessages(res.data)
    // })
    
    // Get friend requests
    // axios.get(`${url}/users/${userId}`)
    // .then((res) => {
    //     setRequests(res.data)
    //     console.log("- friend requests", res.data)
    // })
},[]) 


return (
    <div style={{ border:'1px solid #eb350f', margin:'2%', height:'90vh', display:'flex', flexDirection:'row' }} className="message-center">
        <div style={{ border:'1px solid #eb350f', width:'55%', margin:'2%', display:'flex', flexDirection:'column', alignItems:'center'}} className='message-section'>
            <InputGroup style={{ margin:'2%', width:'60%' }} className="mb-3">
                <Form.Control  placeholder="Search messages" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <Button variant="outline-secondary" id="button-addon2"> Search </Button>
            </InputGroup>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }} className='messages-area'>
                {messages && messages.map(message => <Message message={message} defaultImage={defaultImage} key={message._id}/>)} 
            </div>     
        </div>
        <div style={{ border:'1px solid #eb350f', margin:'2%', width:'35%', display:'flex', flexDirection:'column', alignItems:'center'}} className='requests-section'>
            {requests && requests.map(request => <FriendRequest request={request} defaultImage={defaultImage} key={request._id}/>)}
        </div>
    </div>
)
}

export default MessageCenter