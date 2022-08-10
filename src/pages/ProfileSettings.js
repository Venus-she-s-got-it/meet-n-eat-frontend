import React, { useReducer, useEffect, useContext, useState } from 'react'
import { UrlContext } from '../App'
import axios from 'axios'
import { userSettingsReducer } from '../data-and-functions/userSettingsReducer'
import { Container, Card, Form, Row, Col, Image, Modal, Button, ListGroup } from 'react-bootstrap'
import { BsFillTrashFill } from "react-icons/bs"


const ProfileSettings = () => {
// state hooks and variable declaration
//===========================================================================
    const { url, defaultImage }  = useContext(UrlContext)
    // Initial State for userSettings
    const initialState = {
        profileimg: `${defaultImage}`,
        about: '',
        location: '',
        displayname: '',
        email: '',
        likedrestaurants: ''
    }
    const [userSettings, dispatch] = useReducer(userSettingsReducer, initialState)
    const [updateKey, setUpdateKey] = useState('')
    const [user, setUser] = useState()
    const [modalShow, setModalShow] = useState(false)

// Getting user data
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
                dispatch({
                    key: 'about',
                    value: data.about
                })
                dispatch({
                    key: 'username',
                    value: data.username
                })
                dispatch({
                    key: 'profileimg',
                    value: data.profileimg
                })
                dispatch({
                    key: 'location',
                    value: data.location
                })
                dispatch({
                    key: 'displayname',
                    value: data.displayname
                })
                dispatch({
                    key: 'email',
                    value: data.email
                })
                console.log(data)
            })
        }, [])
 

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
    function handleShow() {
        setModalShow(!modalShow)
    }

    // have to make a route in db that access likedrestaurants and deletes by restaurant id
    // function onDelete(e) {
    //     e.preventDefault()
    //     axios.delete(`${url}/users/62ed53ae80c5c665832c887d/`)
    // }

    // eventhandler for modal
    
// Conditional Rendering
    if (!user) { 
        return null
    } else if (!userSettings) {
        return null
    }
    return (
        <Container style={{ marginTop: '18vh', border: '1px solid #EB3510', boxShadow:'2px 5px 26px -9px rgba(0,0,0,0.75)', borderRadius:'10px'}}>
            <Card style={{border: 'none'}} className="fluid px-4 py-4">
                <Row>
                    <Col style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRight: '1px solid #EB3510' }}>
                        <Image 
                        src={userSettings.profileimg} 
                        alt="profile-image"
                        width={200}
                        height={200}
                        style={{border: '1px solid #EB3510', margin: '1rem', borderRadius: '5px'}}></Image>
                        <Button variant="danger" style={{backgroundColor:'#EB3510', borderColor: '#D6300F'}}>Change Profile Picture</Button>
                        <h3 style={{marginTop:'1rem'}}>{user.username}</h3>
                        <Form> 
                            <Form.Label>About me</Form.Label>
                            <Form.Control  
                            className="about"
                            type="about-me" 
                            placeholder="Write your About Me here for others to see"
                            onChange={inputChange}  
                            value={userSettings.about}
                            style={{width: '105%'}}
                            />
                            <Button variant="danger" 
                            type="submit"
                            id="save-changes"
                            onClick={onSubmit}
                            style={{marginTop: '1rem',backgroundColor:'#EB3510', borderColor: '#D6300F'}}
                            >Save Changes</Button>
                        </Form>
                    </Col>
                    <Col style={{textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Form style={{paddingLeft: '4rem'}}>
                            <Row>
                                <Form.Label>Location</Form.Label>
                                <Form.Control 
                                className="location"
                                type="location" 
                                placeholder="eg. Los Angeles, California"
                                onChange={inputChange}
                                value={userSettings.location}
                                style={{border: '1px solid #EB3510', width: '70%'}}
                                />
                                <Button variant="danger"
                                type="submit"
                                id="save-changes"
                                onClick={onSubmit}
                                style={{width: 'auto', marginLeft:'2rem', backgroundColor:'#EB3510', borderColor: '#D6300F'}}
                                >Save</Button>
                                <Form.Label style={{marginTop:'2rem'}}>Display Name</Form.Label>
                                <Form.Control 
                                className="displayname" 
                                type="display-name"
                                placeholder="Change Display Name"
                                onChange={inputChange}
                                value={userSettings.displayname}
                                style={{border: '1px solid #EB3510', width: '70%'}}
                                />
                                <Button variant="danger"
                                type="submit"
                                id="save-changes"
                                onClick={onSubmit}
                                style={{width: 'auto', marginLeft:'2rem', backgroundColor:'#EB3510', borderColor: '#D6300F'}}
                                >Save</Button>
                                <Form.Text className="text-muted">This will be the name other users see when they view your profile.</Form.Text>
                            </Row>
                            <Row>
                                <Form.Label style={{marginTop:'2rem'}}>Email</Form.Label>
                                <Form.Control 
                                className="email"
                                type="email-address" 
                                placeholder="Change your email address"
                                onChange={inputChange}
                                value={userSettings.email}
                                style={{border: '1px solid #EB3510', width: '70%'}}
                                />
                                <Button variant="danger"
                                type="submit"
                                id="save-changes"
                                onClick={onSubmit}
                                style={{width: 'auto', marginLeft:'2rem', backgroundColor:'#EB3510', borderColor: '#D6300F'}}

                                >Save</Button>
                            </Row>
                        </Form>
                                <Button variant="danger" style={{width: 'auto', marginLeft:'2rem', backgroundColor:'#EB3510', borderColor: '#D6300F', marginTop:'5rem'}} onClick={handleShow}>Edit Liked Restaurants</Button>
                                <Modal 
                                show={modalShow}
                                onHide={handleShow}
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
                                                <ListGroup.Item>{likedrestaurant.name}</ListGroup.Item>
                                            ))}
                                            <BsFillTrashFill 
                                            className="likedrestaurants"
                                            type="delete-likedrestaurant"
                                            onClick/>
                                        </ListGroup>
                                    </Modal.Body>
                                </Modal>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}

export default ProfileSettings