import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { UrlContext } from '../App'
import { Card, Form, InputGroup, Button, OverlayTrigger, Popover} from 'react-bootstrap' 
import LikedRestaurant from '../components/LikedRestaurants'
import Friends from '../components/Friends'
import CoordinateMeetup from '../components/CoordinateMeetup'
import ProfileCard from '../components/ProfileCard'
import Event from '../components/Event'

const MyProfile = () => {

const url = useContext(UrlContext)

const [profile, setProfile] = useState(null)

const profileExample = require('../data-and-functions/userexample.json')
console.log(profileExample)
let friends = profileExample[0].friends
let restaurantlist = profileExample[0].likedrestaurants;

useEffect(() => {

    axios.get('http://localhost:8000/users/62ed53ae80c5c665832c887d', profile) //Temporary ID just to test out page
    .then((res) => {
        setProfile(res.data)
        console.log(res.data)
})
},[])

let today = new Date().toLocaleDateString()
console.log(today)

return (
    <div style={{margin:'4%', height:'85vh', display:'flex', flexDirection:'row' }} className='my-profile'>
        <div style={{ border:'1px solid black', width:'30%', marginRight:'3%', display:'flex', justifyContent:'center', borderRadius:'10px'}} className='info-section'>
            <ProfileCard username={profile && profile.username} location={profile && profile.location} profileimg={profile && profile.profileimg} about={profile && profile.about}/>
            {/* PROFILE INFORMATION CARD COMPONENT  */}
        </div>
        <div style={{width:'45%', marginRight:'3%', display:'flex', flexWrap:'wrap', justifyContent:'space-between' }} className='middle-section'>
            <div style={{ border:'1px solid black', height:'68%', width:'49%', borderRadius:'10px'}} className='restaurants-block'>
                <InputGroup style={{ margin:'2%', width:'90%', marginTop:'10%'}} className="mb-3">
                    <Form.Control placeholder="Liked restaurants" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <Button variant="outline-secondary" id="button-addon2"> Search </Button>
                </InputGroup>
                        <div style={{ padding:'5%', overflow:'scroll', overflowX:'hidden', maxHeight:'76%', display:'flex', flexDirection:'column', alignItems:'center' }}>
                            {restaurantlist && restaurantlist.map(restaurant => <LikedRestaurant 
                            key={restaurant._id} 
                            name={restaurant.name} 
                            title={restaurant.categories[0].title} 
                            display_phone={restaurant.display_phone}
                            price={restaurant.price}
                            state={restaurant.location.state}
                            city={restaurant.location.city}
                            address1={restaurant.location.address1}
                            photos={restaurant.image_url} />)}
                        </div>
                        <div style={{display:'flex' }}>
                            <a style={{ margin:'0 auto', textAlign:'center'}} href=''>Browse Restaurants</a>
                        </div>
            </div>
            <div style={{ border:'1px solid black', height:'68%', width:'49%', borderRadius:'10px', overflow:'scroll', overflowX:'hidden' }} className='friends-block'>
                {/* {profileExample && profileExample[0].friends.map((friends) => { <Friends key={friends._id}/>})} */}
                <Card style={{ width: '100%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Card.Body>
                        <Card.Body style={{width:'100%', heigth:'70%'}}>
                        <div>
                            <InputGroup style={{ margin:'2%', width:'90%'}} className="mb-3">
                            <Form.Control placeholder="Search Friends" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <Button variant="outline-secondary" id="button-addon2"> Search </Button>
                            </InputGroup>
                            {friends && friends.map(friend =>  <Friends key={friend._id} username={friend.username} displayname={friend.displayname} profileimg={friend.profileimg} />)}
                        </div>
                        </Card.Body>
                    </Card.Body>
                    <Card.Link href="#">Browse Friends</Card.Link>
            </Card>
            </div>
            <div style={{ border:'1px solid black', height:'30%', width:'100%', marginTop:'2%', borderRadius:'10px'}} className='coordinate-block'>
                <CoordinateMeetup 
                username={profile && profile.friends[0].username} 
                name={profile && profile.likedrestaurants[0].name} 
                profile={profile} friends={friends} profileExample={profileExample}/>
            </div>
        </div>
        <div style={{ border:'1px solid black', width:'25%', borderRadius:'10px'}} className='itinerary-section'>
            <div style={{ margin:'5%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center' }}>
                <h2 style={{ borderBottom:'1px solid rgb(211,211,211)' }}>Itinerary</h2>
                <h2> {today} </h2>
            </div>
            <div style={{margin:'5%', height:'80%', display:'flex', flexDirection:'column', alignItems:'center' }}>
                <Event />
                <Event />
                <Event />
            </div>
        </div>

    </div>
)
}

export default MyProfile