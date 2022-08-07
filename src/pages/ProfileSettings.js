import React, { useReducer, useEffect, useContext } from 'react'
import { UrlContext } from '../App'
import axios from 'axios'
import { userSettingsReducer } from '../data-and-functions/userSettingsReducer'
import { Container, Card, Row, Col } from 'react-bootstrap'

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

const [userSettings, dispatch] = useReducer(userSettingsReducer, initialState)

// onChange or onSubmit  function
function inputChange(e) {
    dispatch({
        key: 'profileSettings',
        value: e.target.value
    })
}

useEffect(() => {
    axios.put(`${url}/users/62ed53ae80c5c665832c887d`, userSettings)
    // axios.get(`${url}/restaurants/${searchString}`)
        .then((res, err) => { 
            if (res.status === 404) {
                console.log(err)
            } else if(res.status === 200 || res.status === 304) {
                return res.data
            }
            console.log(userSettings)
        })
        // .then((data) => {
            
        // }) 
        
    }, [])

return (
    <Container>
        <Card>

        </Card>
    </Container>
)
}

export default ProfileSettings