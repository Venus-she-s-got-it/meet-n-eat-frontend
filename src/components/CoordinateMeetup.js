import React, { useEffect } from 'react'
import { Card, Dropdown, Button, Form  } from 'react-bootstrap'
import { useState } from 'react'

const CoordinateMeetup = ( {profileExample} ) => {

    const friends = profileExample[0].friends;
    const profile = profileExample[0]

    const [value, setValue ] = useState(friends[0].username)
    const [therestaurant, setTheRestaurant] = useState('Choose Restaurant')
    const [date, setDate] = useState(null)
    const [hour, setHour] = useState(null)
    
    
    const name = friends && friends.filter((friend) => value === friend.username)

    
    const handleSelect = (e) => {
        console.log(e)
        setValue(e)
        
    }
    const handleRestaurant = (e) => {
        console.log(e)
        setTheRestaurant(e)
    }
    const handleDate = (e) => {
        console.log(e.target.value)
        setDate(e.target.value)
    }
    const handleHour = (e) => {
        console.log(e.target.value)
        setHour(e.target.value)
    }


return (
    <Card style={{ width: '100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', border:'1px solid #D6300F'}}>
        <Card.Body>
            <Card.Title style={{textAlign:'center'}}>Coordinate Meet 'n Eat with friends</Card.Title>
            <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', width:'105%', alignItems:'self-end'}}>
                <Dropdown  onSelect={handleSelect}>
                    <Dropdown.Toggle  style={{ width:'100%', border:'1px solid #D6300F', backgroundColor:'white', color:'black' }}  variant="secondary" id="dropdown-basic">
                        {value}
                    </Dropdown.Toggle>
                    <Dropdown.Menu >
                        {profile && profile.friends.map(friend => <Dropdown.Item eventKey={friend.username} key={friend._id}>{friend.username}</Dropdown.Item>)}
                    </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown onSelect={handleRestaurant} style={{ marginTop:'5%'}}>
                    <Dropdown.Toggle style={{ width:'100%', border:'1px solid #D6300F', backgroundColor:'white', color:'black' }} variant="secondary" id="dropdown-basic">
                        { therestaurant }
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        { name && name[0].likedrestaurants.map((rest) => <Dropdown.Item eventKey={rest.name} key={rest._id}> {rest.name} </Dropdown.Item> )}
                        <Dropdown.Item></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            <input style={{padding:'1%', borderRadius:'5px', border:"1px solid #D6300F"}} onChange={handleDate} type='date'></input>
            <input style={{padding:'1%', borderRadius:'5px', border:"1px solid #D6300F"}} onChange={handleHour} type='time' ></input>
            </div>
            <Button style={{ width:'100%', marginTop:'5%', backgroundColor:'#D6300F', border:'none' }} id="button-addon2"> Invite </Button>
        </Card.Body>
    </Card>
)
}

export default CoordinateMeetup
