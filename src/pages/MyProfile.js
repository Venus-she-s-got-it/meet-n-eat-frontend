import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { UrlContext } from '../App'
import { Card, ListGroup, Form, InputGroup, Button, Dropdown, Offcanvas } from 'react-bootstrap' 
import LikedRestaurant from '../components/LikedRestaurants'
import Friends from '../components/Friends'
import CoordinateMeetup from '../components/CoordinateMeetup'
import ProfileCard from '../components/ProfileCard'

const MyProfile = () => {

const url = useContext(UrlContext)

const [profile, setProfile] = useState(null)

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
            <ProfileCard username={profile && profile.username} location={profile && profile.location}/>
            {/* PROFILE INFORMATION CARD COMPONENT  */}
        </div>
        <div style={{width:'45%', marginRight:'3%', display:'flex', flexWrap:'wrap', justifyContent:'space-between' }} className='middle-section'>
            <div style={{ border:'1px solid black', height:'68%', width:'49%', borderRadius:'10px' }} className='restaurants-block'>
                 {/* {profile && profile.map((likedrestaurants) => <LikedRestaurant likedrestaurants={likedrestaurants} key={likedrestaurants._id}/>)} */}
                <LikedRestaurant 
                name={profile && profile.likedrestaurants[0].name}
                title={profile && profile.likedrestaurants[0].categories[0].title}
                display_phone={profile && profile.likedrestaurants[0].display_phone}
                price={profile && profile.likedrestaurants[0].price}
                state={profile && profile.likedrestaurants[0].location.state}
                city={profile && profile.likedrestaurants[0].location.city}
                address1={profile && profile.likedrestaurants[0].location.address1}
                photos={profile && profile.likedrestaurants[0].photos[2]}
                />
            </div>
            <div style={{ border:'1px solid black', height:'68%', width:'49%', borderRadius:'10px' }} className='friends-block'>
                <Friends
                displayname={profile && profile.friends[0].displayname}
                username={profile && profile.friends[0].username} 
                />
            </div>
            <div style={{ border:'1px solid black', height:'30%', width:'100%', marginTop:'2%', borderRadius:'10px'}} className='coordinate-block'>
                <CoordinateMeetup 
                username={profile && profile.friends[0].username} 
                name={profile && profile.likedrestaurants[0].name} 
                profile={profile}/>
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