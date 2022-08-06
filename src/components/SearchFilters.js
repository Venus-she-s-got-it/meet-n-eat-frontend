import { useState } from 'react'
import { Modal, Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

const SearchFilters = ({ dispatch, filterClick, showFilters }) => {
    const [citySelect, setCitySelect] = useState(null)

    // Handles click events for dropdown menus
    function clickHandler(e) {
        setCitySelect(e.target.text)
        dispatch({
            key: 'city',
            value: e.target.text
        })
    }

return (
    <Modal show={showFilters} onHide={filterClick}>
        <Modal.Header closeButton>
            <Modal.Title>Filter Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Dropdown>
                <Dropdown.Toggle id='city-select'>
                    {citySelect || 'select city'}
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
        </Modal.Body>
    </Modal>
)
}

export default SearchFilters