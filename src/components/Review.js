import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { Context } from '../App'
import { axiosAll, axiosReducer } from '../data-and-functions/axiosAll'
import { formatDateTime } from '../data-and-functions/formatDateTime'

const Review = ({ review }) => {
    const [reviewer, dispatch] = useReducer(axiosReducer, { response: null })
    const { loggedInUser } = useContext(Context)
    const [date, time] = formatDateTime(review.createdAt)

    useEffect(() => {
        axiosAll('GET', `/users/${review.reviewer}`, loggedInUser.token, dispatch)
    },[])
    console.log(reviewer)

if(!reviewer.response) return <Container>Loading...</Container>
return (
    <ListGroup horizontal>
        <ListGroup.Item style={{borderRightColor:'#D6300F'}}>{reviewer.response.displayname}</ListGroup.Item>
        <ListGroup.Item style={{ borderRightColor:'#D6300F' }}>{review.body}</ListGroup.Item>
        <ListGroup.Item>{`${date} ${time}`}</ListGroup.Item>
    </ListGroup>
            
)
}

export default Review