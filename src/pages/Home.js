import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import axios from 'axios'
import { UrlContext } from '../App'

const Home = () => {
// State
const [categories, setCategories] = useState(null)
const url = useContext(UrlContext)

useEffect(() => {
    
})

return (
    <Container>
        <Search />
        <div>Not sure where to go? Start with a cuisine and see where it leads!</div>

    </Container>
)
}

export default Home