import React, { useReducer, useEffect, useContext, useState } from 'react'
import { UrlContext } from '../App'
import axios from 'axios'
import { userSettingsReducer } from '../data-and-functions/userSettingsReducer'
import { Container, Card, Form, Row, Col, Image } from 'react-bootstrap'

const ProfileSettings = () => {
const url = useContext(UrlContext)
// Initial State for userSettings
const initialState = {
    username: '',
    profileimg: '',
    about: '',
    location: '',
    displayname: '',
    email: '',
    likedrestaurants: ''
}

const [user, setUser] = useState()
const [userSettings, dispatch] = useReducer(userSettingsReducer, initialState)

// onChange or onSubmit  function
function inputChange(e) {
    dispatch({
        key: 'profileSettings',
        value: e.target.value
    })
}

useEffect(() => {
    axios.put(`${url}/users/62ed53ae80c5c665832c887d`, initialState)
    // axios.get(`${url}/restaurants/${searchString}`)
        .then((res, err) => { 
            if (res.status === 404) {
                console.log(err)
            } else if(res.status === 200 || res.status === 304) {
                return res.data
            }
            console.log(initialState)
        })
    }, [])

useEffect(() => {
    axios.get(`${url}/users/62ed53ae80c5c665832c887d`, initialState)
    // axios.get(`${url}/restaurants/${searchString}`)
        .then((res, err) => { 
            if (res.status === 404) {
                console.log(err)
            } else if(res.status === 200 || res.status === 304) {
                return res.data
            }
        })
        .then((data) => {
            setUser(data)
        })
    }, [])
if (!user) {
    return null
}
return (
    <Container>
        <Card>
            <Image src="" alt=""></Image>
            <button>Change Profile Picture</button>
            <p>{user.username}</p>
            <Form>
                <Form.Control type="about-me" placeholder="Write your About Me here for others to see"></Form.Control>
                <Form.Label>Edit your location</Form.Label>
                <Form.Control type="location" placeholder="eg. Los Angeles, California"></Form.Control>
            </Form>
            <Form>
                <Form.Label>Display Name</Form.Label>
                <Form.Control type="display-name" placeholder="Change Display Name"></Form.Control>
                <Form.Text className="text-muted">This will be the name other users see when they view your profile.</Form.Text>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email-address" placeholder="Change your email address"></Form.Control>
            </Form>
        </Card>
    </Container>
)
}

export default ProfileSettings