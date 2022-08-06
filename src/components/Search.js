import { useReducer, useState } from "react"
import { Button, ButtonGroup, Col, Container,  Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { getSearchString } from "../functions/getSearchString"
import { searchCriteriaReducer } from "../functions/searchCriteriaReducer"
import SearchFilters from "./SearchFilters"

const Search = () => {
    // Initial state for searchCriteria
    // ===========================================================================
    const initialState = {
        searchString: '',
        city: '',
        category: '',
        priceRange: '',
        wheelChairAccessible: '',
        openLate: ''
    }

    // State hooks and variable declarations
    // ===========================================================================
    const [searchCriteria, dispatch] = useReducer(searchCriteriaReducer, initialState)
    const [showFilters, setShowFilters] = useState(false)
    const navigate = useNavigate()
    const searchString = getSearchString(searchCriteria)
    console.log(searchString)
    
    // Event handlers
    // ===========================================================================
    function inputChange(e) {
        dispatch({
            key: 'searchString',
            value: e.target.value})
    }

    function formSubmit(e) {
        e.preventDefault()
        searchCriteria && navigate(searchString)

    }
    
    function filterClick() {
        setShowFilters(prev => !prev)
    }

    function containerClick() {
        showFilters && setShowFilters(false)
    }

    return (
        <Container>
            <Form onSubmit={formSubmit}>
                <Form.Group controlId='searchInput'>
                    <Row className='d-flex justify-content-end'>
                        <Col className='gx-1'>
                            <Form.Control
                                type='text'
                                placeholder='find restaurants'
                                onChange={inputChange}
                                value={searchCriteria.searchString}
                            />
                        </Col>
                        <Col>
                            <ButtonGroup>
                                <Button
                                    variant='secondary'
                                    type='submit'
                                >Search</Button>
                                <Button
                                    variant='secondary'
                                    type='button'
                                    onClick={filterClick}
                                >Filters</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <SearchFilters 
                dispatch={dispatch} 
                filterClick={filterClick}
                showFilters={showFilters}
            />
        </Container>
    )
}

export default Search