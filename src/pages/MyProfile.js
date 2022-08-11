import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import { useState } from 'react'
import LikedRestaurant from '../components/LikedRestaurants'
import Friends from '../components/Friends'
import CoordinateMeetup from '../components/CoordinateMeetup'
import ProfileCard from '../components/ProfileCard'
import Itinerary from '../components/Itinerary'
import { Container } from 'react-bootstrap'
import { axiosAll, axiosReducer } from '../data-and-functions/axiosAll'
import { Context } from '../App'

const MyProfile = () => {
const [profile, dispatch] = useReducer(axiosReducer, { response: null })
const { loggedInUser } = useContext(Context)
const profileExample = require('../data-and-functions/userexample.json')


useEffect(() => {
    axiosAll('GET', `/users/username/${loggedInUser.username}`, loggedInUser.token, dispatch)
},[])

console.log("- response", profile.response)

if(!profile.response){
    return <Container>Loading...</Container>
}

let restaurantlist = profile.likedrestaurants;
console.log(profile)

return (
    <div style={{margin:'4%', height:'85vh', display:'flex', flexDirection:'row' }} className='my-profile'>
        <div style={{ border:'1px solid #D6300F', boxShadow:'2px 5px 26px -9px rgba(0,0,0,0.75)', width:'30%', marginRight:'3%', display:'flex', justifyContent:'center', borderRadius:'10px' }} className='info-section'>
            <ProfileCard username={profile && profile.username} location={profile && profile.location} profileimg={profile && profile.profileimg} about={profile && profile.about}/>
        </div>
        <div style={{width:'45%', marginRight:'3%', display:'flex', flexWrap:'wrap', justifyContent:'space-between'}} className='middle-section'>
            <div style={{ boxShadow:'2px 5px 26px -9px rgba(0,0,0,0.75)', height:'68%', width:'49%', borderRadius:'10px',overflow:'scroll', overflowX:'hidden', border:'1px solid #D6300F'}} className='restaurants-block'>
                <LikedRestaurant restaurantlist={restaurantlist} />
            </div>
            <div style={{ boxShadow:'2px 5px 26px -9px rgba(0,0,0,0.75)', height:'68%', width:'49%', borderRadius:'10px', overflow:'scroll', overflowX:'hidden', border:'1px solid #D6300F' }} className='friends-block'>
                <Friends profileExample={profileExample} />             
            </div>
            <div style={{ boxShadow:'2px 5px 26px -9px rgba(0,0,0,0.75)', height:'30%', width:'100%', marginTop:'2%', borderRadius:'10px'}} className='coordinate-block'>
                <CoordinateMeetup profileExample={profileExample}/>
            </div>
        </div>
        <div style={{ boxShadow:'2px 5px 26px -9px rgba(0,0,0,0.75)', width:'25%', borderRadius:'10px', border:'1px solid #D6300F'}} className='itinerary-section'>
              <Itinerary />                      
        </div>
    </div>
)
}

export default MyProfile