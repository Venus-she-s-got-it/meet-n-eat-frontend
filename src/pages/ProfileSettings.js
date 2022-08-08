import React, { useReducer, useEffect, useContext, useState } from 'react'
import { UrlContext } from '../App'
import axios from 'axios'
import { userSettingsReducer } from '../data-and-functions/userSettingsReducer'
import { Container, Card, Form, Row, Col, Image, Modal, Button, ListGroup } from 'react-bootstrap'
import { BsFillTrashFill } from "react-icons/bs"


const ProfileSettings = () => {
    const url = useContext(UrlContext)

// state hooks
//===========================================================================
const [user, setUser] = useState()
const [modalShow, setModalShow] = useState(false)
// State hook and variable declaration for getting user data
// ===========================================================================
    
    useEffect(() => {
        axios.get(`${url}/users/62ed53ae80c5c665832c887d`)
        // axios.get(`${url}/restaurants/${searchString}`)
            .then((res, err) => { 
                if (res.status === 404) {
                    console.log(err)
                } else if(res.status === 200 || res.status === 204 || res.status === 201) {
                    return res.data
                }
            })
            .then((data) => {
                setUser(data)
            })
        }, [])
        
        const initialState = {
            username: '',
            profileimg: 'https://freesvg.org/img/abstract-user-flat-4.png',
            about: '',
            location: '',
            displayname: '',
            email: '',
            likedrestaurants: ''
        }
    
        const [userSettings, dispatch] = useReducer(userSettingsReducer, initialState)
        const [updateKey, setUpdateKey] = useState('')

// Event Handler Functions
// ===========================================================================
    function inputChange(e) {
        setUpdateKey(e.target.classList[0])
        dispatch({
            key: e.target.classList[0],
            value: e.target.value
        })
        console.log(userSettings[updateKey])
    }
    function onSubmit(e) {
        e.preventDefault()
        axios.put(`${url}/users/62ed53ae80c5c665832c887d`, { [updateKey]: userSettings[updateKey] })
        dispatch({
            key: updateKey,
            value: ''
        })
    }
    // have to make a route in db that access likedrestaurants and deletes by restaurant id
    // function onDelete(e) {
    //     e.preventDefault()
    //     axios.delete(`${url}/users/62ed53ae80c5c665832c887d/`)
    // }
    const handleClose = () => {
        setModalShow(false)
    }
    const handleShow = () => {
        setModalShow(true)
    }
// Conditional Rendering
    if (!user) {
        return null
    } else if (!userSettings) {
        return null
    }
    return (
        <Container>
            <Card className="fluid px-4 py-4">
                <Row>
                    <Col>
                        <Image 
                        src={userSettings.profileimg} 
                        alt="profile-image"
                        width={200}
                        height={200}></Image>
                        <button>Change Profile Picture</button>
                        <h3>{user.username}</h3>
                        <Form>
                            <Form.Label>About me</Form.Label>
                            <Form.Control 
                            className="about"
                            type="about-me" 
                            placeholder="Write your About Me here for others to see"
                            onChange={inputChange}
                            value={userSettings.about}
                            />
                            <button 
                            type="submit"
                            id="save-changes"
                            onClick={onSubmit}
                            >Edit</button>
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Row>
                                <Form.Label>Location</Form.Label>
                                <Form.Control 
                                className="location"
                                type="location" 
                                placeholder="eg. Los Angeles, California"
                                onChange={inputChange}
                                value={userSettings.location}
                                />
                                <button 
                                type="submit"
                                id="save-changes"
                                onClick={onSubmit}
                                >Save</button>
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control 
                                className="displayname"
                                type="display-name" 
                                placeholder="Change Display Name"
                                onChange={inputChange}
                                value={userSettings.displayname}
                                />
                                <button 
                                type="submit"
                                id="save-changes"
                                onClick={onSubmit}
                                >Save</button>
                                <Form.Text className="text-muted">This will be the name other users see when they view your profile.</Form.Text>
                            </Row>
                            <Row>
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                className="email"
                                type="email-address" 
                                placeholder="Change your email address"
                                onChange={inputChange}
                                value={userSettings.email}
                                />
                                <button 
                                type="submit"
                                id="save-changes"
                                onClick={onSubmit}
                                >Save</button>
                            </Row>
                        </Form>
                                <button onClick={handleShow}>Edit Liked Restaurants</button>
                                <Modal 
                                show={modalShow}
                                onHide={handleClose}
                                animation={false}
                                size="md"
                                aria-labelledby="likedrestaurants-modal"
                                centered
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="likedrestaurants-modal">
                                            Liked Restaurants
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <ListGroup>
                                            {user.likedrestaurants.map(likedrestaurant => (
                                                <ListGroup.Item>{likedrestaurant}</ListGroup.Item>
                                            ))}
                                            <BsFillTrashFill 
                                            className="likedrestaurants"
                                            type="delete-likedrestaurant"
                                            onClick/>
                                        </ListGroup>
                                    </Modal.Body>
                                </Modal>
                                <button 
                                type="submit"
                                id="save-changes"
                                onClick={onSubmit}
                                >Save Changes</button>
                                 
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default ProfileSettings