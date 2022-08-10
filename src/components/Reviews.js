
import React, { useEffect, useState } from 'react'
import {  Card, ListGroup } from 'react-bootstrap'
import Review from './Review'


const Reviews = () => {
    // State hooks and variable declarations
    // ===========================================================================
    const [reviews, setReviews] = useState(null)
    // const dateObj = new Date(message.createdAt)
    // const date = dateObj.toLocaleDateString()
    // const time = dateObj.toLocaleTimeString("en", { timeStyle: 'short' })
    
    // get reviews from restaurant id once we update controllers
    // useEffect(() => {
    //     axios.get()
    // }, [])
return (
    <div style={{  display:'flex', justifyContent:'center', marginTop:'2%'}}>

        <Card style={{width:'50%', borderColor:'#D6300F'}}>
            {/* map over Review here */}
            <Review />
        </Card>
    </div>
)
}

export default Reviews