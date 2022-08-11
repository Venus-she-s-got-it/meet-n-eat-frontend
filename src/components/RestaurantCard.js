import React, { useContext, useState, useEffect} from 'react';
import { Context } from '../App'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import {Row, ButtonGroup, ToggleButton} from 'react-bootstrap'


const RestaurantCard = ({ restaurant }) => {
    const { colorTemplate }  = useContext(Context)

    const [categories, setCategories] = useState()
    const { name, image_url, display_phone, price  } = restaurant
    const city = restaurant.location.city
    const state = restaurant.location.state
    const categoriesArr = []
    for (let i=0; i < restaurant.categories.length; i++) {
        categoriesArr.push(restaurant.categories[i].title)
    }
    useEffect(() => {
        setCategories(categoriesArr)
    }, [])
    
    if (categories) {
        return (
            <Card style={{marginBottom:'5%', fontSize:'70%', display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center', width:'40%', border:`1px solid ${colorTemplate.darkColor}`, margin:'1%', boxShadow:'-1px 3px 11px 0px rgba(0,0,0,0.75)'}} className="fluid">
                <div style={{width:'100%'}}>
                    <ButtonGroup style={{float:'right', margin:'1%'}}className="mb-2">
                        <ToggleButton type="checkbox" variant="outline-danger">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                        </svg>
                        </ToggleButton>
                    </ButtonGroup>
                </div>
        <Card style={{border:'none', border:"none", padding:'5%'}} className="fluid">
            <Link style={{ color:'black', textDecoration:'none' }} to={`/restaurants/${restaurant._id}`}>
            <Card
            style={{ display:'flex', flexDirection:'column'}}
            className ="py-1 px-1 border-white ">
                <Row style={{padding:'5%', borderRadius:'10px', backgroundColor:"white"}}>
                    <Col >
                        <Container style={{ textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}} className="ml-1">
                            <Image 
                                style={{ borderRadius:'10px', border:'1px solid #D6300F', marginBottom:'5%'}}
                                src={image_url}
                                alt="restaurant-image"
                                width={170}
                                height={170}
                                />
                            <Card.Title>{name}</Card.Title>
                        </Container> 
                    </Col>
                    <Col>
                        <Card.Body>
                            <Row>
                                <Col>
                                    {/* show results from other users who've liked restaurant */}
                                    <p>Rating stars here</p>
                                </Col>
                                <Col>
                                    {/* add onClick eventHandler to update users likedrestaurants */}
                                </Col>
                            </Row>
                            <p>{price}</p>
                            <p>M - F 9:00 AM - 8:00 PM</p>
                            <Row>
                                <Col>
                                    <p>{city}, {state}</p>
                                </Col>
                                <Col>
                                    <p>{display_phone}</p>
                                </Col>
                            </Row>
                            <Row style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
                            {categories[0]}
                            </Row>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            </Link>
        </Card>
        </Card>
    )
}}

export default RestaurantCard