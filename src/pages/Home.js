import React, { useContext, useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Search from '../components/Search'
import { UrlContext } from '../App'
import CuisineCategory from '../components/CuisineCategory'

const Home = () => {
// State
const categories = ['Italian', 'Southern', 'American (Traditional)']
const url = useContext(UrlContext)

return (
    <Container>
        <Search />
        <div>Not sure where to go? Start with a cuisine and see where it leads!</div>
        <Row className="d-flex">
            {categories.map((category, index) => <CuisineCategory key={index} category={category} />)}
        </Row>
    </Container>
)
}

export default Home