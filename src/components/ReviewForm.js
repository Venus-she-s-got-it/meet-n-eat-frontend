import axios from 'axios'
import { useContext, useState } from 'react'
import { Button, Container, Dropdown, Form } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { useNavigate } from 'react-router-dom'
import { UrlContext } from '../App'

const ReviewForm = ({ restaurantId }) => {
    const initialState = {
        stars: '',
        body: ''
    }
    const [reviewState, setReviewState] = useState(initialState)
    const { url } = useContext(UrlContext)
    const navigate = useNavigate()
    const starMenu = ['None', '1', '2', '3', '4', '5']

    function starClick(e) {
        e.target.text !== 'None' ?
        setReviewState({...reviewState, stars: e.target.text})
        : setReviewState({...reviewState, stars: ''})
    }

    function reviewChange(e) {
        setReviewState({...reviewState, body: e.target.value})
    }

    function reviewSubmit(e) {
        e.preventDefault()
        reviewState.stars !== '' && axios.put(`${url}/restaurants/${restaurantId}`, reviewState)
            .then(() => {
                setReviewState(initialState)
                navigate(`/restaurants/${restaurantId}`)
            })
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