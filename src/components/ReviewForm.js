import axios from 'axios'
import { useContext, useEffect, useReducer, useState } from 'react'
import { Button, Container, Dropdown, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Context } from '../App'
import { axiosAll, axiosReducer } from '../data-and-functions/axiosAll'

const ReviewForm = ({ restaurantId, handleShow }) => {
    const initialState = {
        reviewer: '',
        stars: '',
        body: ''
    }
    console.log(restaurantId)
    const [reviewState, dispatch] = useReducer(axiosReducer, initialState)
    const navigate = useNavigate()
    const { loggedInUser } = useContext(Context)
    const starMenu = ['None', '1', '2', '3', '4', '5']

    useEffect(() => {
        axiosAll('GET', `/users/username/${loggedInUser.username}`, loggedInUser.token, dispatch)
    },[])

    function starClick(e) {
        e.target.text !== 'None' ?
        dispatch({
            key: 'stars',
            value: e.target.text})
        : dispatch({
            key: 'stars',
            value: ''})
    }

    function reviewChange(e) {
        dispatch({
            key: 'body',
            value: e.target.value})
    }

    function reviewSubmit(e) {
        e.preventDefault()
        reviewState.stars !== '' && 
            axiosAll('POST', `/restaurants/${restaurantId}/reviews`, loggedInUser.token, dispatch, { reviewer: reviewState.response._id, stars: reviewState.stars, body: reviewState.body})
            handleShow()
    }

return (
    <Container>
        <Form>
            <Form.Group controlId='reviewBody'>
                <Dropdown>
                    <Form.Label>Give it some stars</Form.Label>
                    <Dropdown.Toggle>
                        {reviewState.stars || 'Stars'}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {starMenu.map((menuItem, index) => <Dropdown.Item className='stars' onClick={starClick} key={index}>{menuItem}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Label>Tell us your thoughts</Form.Label>
                <Form.Control 
                    as='textarea' 
                    rows={3} 
                    onChange={reviewChange}
                    value={reviewState.body}
                />
                <Button onClick={reviewSubmit}>Submit</Button>
            </Form.Group>
        </Form>
    </Container>
)
}

export default ReviewForm