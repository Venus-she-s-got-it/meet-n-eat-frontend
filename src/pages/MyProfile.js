import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { UrlContext } from '../App'
import { Card, ListGroup, Form, InputGroup, Button, Dropdown, Offcanvas } from 'react-bootstrap' 

const MyProfile = () => {

const url = useContext(UrlContext)

const [profile, setProfile] = useState(null)

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

useEffect(() => {

    axios.get('http://localhost:8000/users/62ed53ae80c5c665832c887d', profile) //Temporary ID just to test out page
    .then((res) => {
        setProfile(res.data)
        console.log(res.data)
})
},[])

return (
    <div style={{margin:'4%', height:'85vh', display:'flex', flexDirection:'row' }} className='my-profile'>
        <div style={{ border:'1px solid black', width:'30%', marginRight:'3%', display:'flex', justifyContent:'center', borderRadius:'10px'}} className='info-section'>
            <Card style={{ width: '90%', padding:'3%' }}>
                <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <Card.Body>
                    <Card.Title>{profile && profile.username}</Card.Title>
                        {/* need to fix location */}
                    <Card.Text> {profile && profile.location} </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <p style={{ textAlign:'center', fontWeight:'500' }}>About</p>
                    <Card.Body>
                        <ListGroup.Item>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</ListGroup.Item>
                    </Card.Body>
                </ListGroup>
            </Card>
            {/* PROFILE INFORMATION CARD COMPONENT  */}
        </div>
        <div style={{width:'45%', marginRight:'3%', display:'flex', flexWrap:'wrap', justifyContent:'space-between' }} className='middle-section'>
            <div style={{ border:'1px solid black', height:'68%', width:'49%', borderRadius:'10px' }} className='restaurants-block'>
                <Card style={{ width: '100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Card.Body>
                        <InputGroup style={{ margin:'2%', width:'90%'}} className="mb-3">
                            <Form.Control placeholder="Liked restaurants" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <Button variant="outline-secondary" id="button-addon2"> Search </Button>
                        </InputGroup>
                            <Card.Body style={{ border:'1px solid gray', width:'100%', heigth:'70%'}}>
                                <div>

                                    {/* card to map */}
                                <Card style={{ width: '100%',display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'1%' }}>
                                    <div style={{ width:'20%'}} >      
                                    <Button style={{ }} onClick={handleShow}>
                                        <Card.Img style={{ width:'100%', borderRadius:'5px' }} variant="top" src={profile && profile.likedrestaurants[0].photos[2]} />
                                    </Button>
                                    <Offcanvas show={show} onHide={handleClose}>
                                        <Offcanvas.Header closeButton>
                                            <div>
                                            <Card style={{ width: '90%', margin:'0 auto' }}>
                                                <Card.Img variant="top" src={profile && profile.likedrestaurants[0].photos[2]} />
                                                <Card.Body>
                                                    <Card.Title>{profile && profile.likedrestaurants[0].name}</Card.Title>
                                                    <Card.Text> Some quick example text to build on the card title and make up the bulk of the card's content. </Card.Text>
                                                </Card.Body>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroup.Item><svg style={{ width:'20px' }} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                                    </svg>{profile && profile.likedrestaurants[0].location.address1}, {profile && profile.likedrestaurants[0].location.city}, {profile && profile.likedrestaurants[0].location.state}</ListGroup.Item>
                                                    <ListGroup.Item>{profile && profile.likedrestaurants[0].display_phone}</ListGroup.Item>
                                                    <ListGroup.Item>Type: {profile && profile.likedrestaurants[0].categories[0].title} <span style={{float:'right'}}>Price: {profile && profile.likedrestaurants[0].price}</span></ListGroup.Item>
                                                </ListGroup>
                                            </Card>
                                            </div>
                                            </Offcanvas.Header>
                                    </Offcanvas>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>{profile && profile.likedrestaurants[0].name}</Card.Text>
                                    </Card.Body>
                                        <ListGroup.Item>{profile && profile.likedrestaurants[0].price}</ListGroup.Item>
                                </Card>
                                </div>
                            </Card.Body>
                        </Card.Body>
                        <Card.Link href="#">Browse Restaurants</Card.Link>
                </Card>
                {/* LIKED RESTAURANTS COMPONENT  */}
            </div>
            <div style={{ border:'1px solid black', height:'68%', width:'49%', borderRadius:'10px' }} className='friends-block'>
            <Card style={{ width: '100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Card.Body>
                        <InputGroup style={{ margin:'2%', width:'90%'}} className="mb-3">
                            <Form.Control placeholder="Search Friends" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <Button variant="outline-secondary" id="button-addon2"> Search </Button>
                        </InputGroup>
                            <Card.Body style={{ border:'1px solid gray', width:'100%', heigth:'70%'}}>
                                <div>

                                    {/* card to map */}
                                <Card style={{ width: '100%',display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'1%' }}>
                                    <div style={{ width:'20%'}} >      
                                    <Card.Img style={{ width:'90%', borderRadius:'5px' }} variant="top" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'/>
                                    </div>
                                    <Card.Body>
                                        <Card.Text>{profile && profile.friends[0].username}</Card.Text>
                                    </Card.Body>
                                        <ListGroup.Item>{profile && profile.friends[0].displayname}</ListGroup.Item>
                                </Card>
                                </div>
                            </Card.Body>
                        </Card.Body>
                        <Card.Link href="#">Browse Friends</Card.Link>
                </Card>
                {/* FRIEND LIST COMPONENT */}
            </div>
            <div style={{ border:'1px solid black', height:'30%', width:'100%', marginTop:'2%', borderRadius:'10px'}} className='coordinate-block'>
            <Card style={{ width: '100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Card.Body>
                        <Card.Title>Coordinate Meet 'n Eat with friends</Card.Title>
                        <Dropdown>
                            <Dropdown.Toggle style={{ width:'100%' }}  variant="secondary" id="dropdown-basic">
                                Choose Friend
                            </Dropdown.Toggle>
                            <Dropdown.Menu>

                                {/* NEED TO MAP FRIENDS */}

                                <Dropdown.Item href="#/action-1">{profile && profile.friends[0].username}</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                        <Dropdown style={{ marginTop:'5%'}}>
                            <Dropdown.Toggle style={{ width:'100%' }} variant="secondary" id="dropdown-basic">
                                Choose Restaurant
                            </Dropdown.Toggle>
                            <Dropdown.Menu>

                                {/* NEED TO MAP RESTAURANTS */}

                                <Dropdown.Item href="#/action-1">{profile && profile.likedrestaurants[0].name}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button style={{ width:'100%', marginTop:'5%' }} variant="success" id="button-addon2"> Invite </Button>
                    </Card.Body>
                </Card>
                {/* COORDINATE MEET UP COMPONENT */}
            </div>
        </div>
        <div style={{ border:'1px solid black', width:'25%', borderRadius:'10px'}} className='itinerary-section'>
            <div style={{ margin:'5%', display:'flex', justifyContent:'center' }}>
                <h2 style={{ borderBottom:'1px solid rgb(211,211,211)' }}>Itinerary</h2>
            </div>
        </div>

    </div>
)
}

export default MyProfile