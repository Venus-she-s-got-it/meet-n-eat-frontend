import React, { useEffect, useState } from 'react'
import {  Card, ListGroup } from 'react-bootstrap'

const Review = () => {
const [review, setReview] = useState(null)
// const dateObj = new Date(message.createdAt)
// const date = dateObj.toLocaleDateString()
// const time = dateObj.toLocaleTimeString("en", { timeStyle: 'short' })

// get reviews from restaurant id once we update controllers
// useEffect(() => {
//     axios.get()
// }, [])

return (
    <ListGroup horizontal>
        <ListGroup.Item style={{borderRightColor:'#D6300F'}}>User123</ListGroup.Item>
        <ListGroup.Item style={{ borderRightColor:'#D6300F' }}>"Food is on point! Service is incredible... What more could a girl ask for?"</ListGroup.Item>
        {/* dateObj would go here instead */}
        <ListGroup.Item>8/5/2022 4:03PM</ListGroup.Item>
    </ListGroup>
            
)
}

export default Review