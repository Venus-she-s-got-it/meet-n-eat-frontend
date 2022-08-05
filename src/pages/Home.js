import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
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
        {categories.map(category => <CuisineCategory category={category} />)}
    </Container>
)
}

export default Home