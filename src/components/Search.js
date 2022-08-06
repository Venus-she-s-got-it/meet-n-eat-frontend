import { useState } from "react"
import { Button, Col, Container, Dropdown, Form, Modal, ModalBody, Row } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"
import { useNavigate } from "react-router-dom"
import { getSearchString } from "../functions/getSearchString"

const initialState = {
    searchString: '',
    city: '',
    category: '',
    priceRange: '',
    wheelChairAccessible: '',
    openLate: ''
}

const Search = () => {
    const [searchCriteria, setSearchCriteria] = useState(initialState)
    const [citySelect, setCitySelect] = useState('select city')
    const navigate = useNavigate()
    const searchString = getSearchString(searchCriteria)
    console.log(searchString)

    function changeHandler(e) {
        setSearchCriteria({...searchCriteria, searchString: e.target.value})
    }

    function submitHandler(e) {
        e.preventDefault()
        searchCriteria && navigate(searchString)
    }

    // Handles click events for dropdown menus
    function clickHandler(e) {
        setCitySelect(e.target.text)
        setSearchCriteria({...searchCriteria, city: e.target.text})
    }

    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='searchInput'>
                    <Row className='d-flex justify-content-end'>
                        <Col className='gx-1'>
                            <Form.Control
                                type='text'
                                placeholder='find restaurants'
                                onChange={changeHandler}
                                value={searchCriteria.searchString}
                            />
                        </Col>
                        <Col>
                            <Button
                                variant='light'
                                type='submit'
                            >Search</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Filter Options</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Dropdown>
                        <Dropdown.Toggle id='city-select'>
                            {citySelect}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <DropdownItem onClick={clickHandler}>Fresno</DropdownItem>
                            <DropdownItem onClick={clickHandler}>Garden Grove</DropdownItem>
                            <DropdownItem onClick={clickHandler}>Long Beach</DropdownItem>
                            <DropdownItem onClick={clickHandler}>Los Angeles</DropdownItem>
                            <DropdownItem onClick={clickHandler}>Oakland</DropdownItem>
                            <DropdownItem onClick={clickHandler}>Sacramento</DropdownItem>
                            <DropdownItem onClick={clickHandler}>San Diego</DropdownItem>
                            <DropdownItem onClick={clickHandler}>San Francisco</DropdownItem>
                            <DropdownItem onClick={clickHandler}>San Jose</DropdownItem>
                            <DropdownItem onClick={clickHandler}>Santa Ana</DropdownItem>
                        </Dropdown.Menu>
                    </Dropdown>
                </ModalBody>
            </Modal.Dialog>
        </Container>
    )
}

export default Search