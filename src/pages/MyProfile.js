import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { UrlContext } from '../App'
import LikedRestaurant from '../components/LikedRestaurants'
import Friends from '../components/Friends'
import CoordinateMeetup from '../components/CoordinateMeetup'
import ProfileCard from '../components/ProfileCard'
import Itinerary from '../components/Itinerary'

const MyProfile = () => {
const { url } = useContext(UrlContext)
const [profile, setProfile] = useState(null)

const profileExample = require('../data-and-functions/userexample.json')
let restaurantlist = profileExample[0].likedrestaurants;

useEffect(() => {

    axios.get(`${url}/users/62ed53ae80c5c665832c887d`) //Temporary ID just to test out page
    .then((res) => {
        setProfile(res.data)
})
},[])

return (
    <div style={{margin:'4%', height:'85vh', display:'flex', flexDirection:'row' }} className='my-profile'>
        <div style={{ border:'1px solid black', width:'30%', marginRight:'3%', display:'flex', justifyContent:'center', borderRadius:'10px'}} className='info-section'>
            <ProfileCard username={profile && profile.username} location={profile && profile.location} profileimg={profile && profile.profileimg} about={profile && profile.about}/>
        </div>
        <div style={{width:'45%', marginRight:'3%', display:'flex', flexWrap:'wrap', justifyContent:'space-between' }} className='middle-section'>
            <div style={{ border:'1px solid black', height:'68%', width:'49%', borderRadius:'10px',overflow:'scroll', overflowX:'hidden'}} className='restaurants-block'>
                <LikedRestaurant restaurantlist={restaurantlist} />
            </div>
            <div style={{ border:'1px solid black', height:'68%', width:'49%', borderRadius:'10px', overflow:'scroll', overflowX:'hidden' }} className='friends-block'>
                <Friends profileExample={profileExample} />             
            </div>
            <div style={{ border:'1px solid black', height:'30%', width:'100%', marginTop:'2%', borderRadius:'10px'}} className='coordinate-block'>
                <CoordinateMeetup profileExample={profileExample}/>
            </div>
        </div>
        <div style={{ border:'1px solid black', width:'25%', borderRadius:'10px'}} className='itinerary-section'>
              <Itinerary />                      
        </div>
    </div>
)
}

export default MyProfile