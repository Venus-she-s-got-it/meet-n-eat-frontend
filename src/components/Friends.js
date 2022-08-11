import React from 'react'
import { Card, InputGroup, Form, Button, ListGroup } from 'react-bootstrap'
import FriendCard from './FriendCard'
import { useState } from 'react'

const Friends = ( {profileExample} ) => {

    const friends = profileExample[0].friends;

    const [searchCharacters, setSearchCharacters] = useState('')

return (
    
    <Card style={{ width: '100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', border:'none'}}>
    <Card.Body>
            <Card.Body style={{width:'100%', heigth:'70%', marginTop:'10%'}}>
            <div>
                <InputGroup style={{ margin:'2%', width:'90%'}} className="mb-3">
                <InputGroup.Text style={{backgroundColor:'#D6300F', color:'white'}} id="basic-addon2">enter name</InputGroup.Text>
                <Form.Control style={{border:'1px solid #D6300F'}} onChange={e => {
                    setSearchCharacters(e.target.value
                        )}
                    } type={true} placeholder="friends" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                </InputGroup>
                {friends && friends.filter((friend) => {
                    if (searchCharacters == ''){
                        return friend
                    } else if (friend.username.toLowerCase().includes(searchCharacters.toLocaleLowerCase())) {
                        return friend
                    }   
                }).map(friend =>  <FriendCard key={friend._id} friend={friend} />)}
            </div>
            </Card.Body>
        </Card.Body>
            <a style={{ margin:'0 auto', textAlign:'center', color:'#D6300F', textDecoration:'none', border:'1px solid #D6300F', borderRadius:'10px', padding:'3px'}} href=''>browse friends</a>
    </Card>
)
}

export default Friends