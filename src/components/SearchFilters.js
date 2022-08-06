import { useState } from 'react'
import { Modal, Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'

const SearchFilters = ({ searchCriteria, dispatch, filterClick, showFilters }) => {
    const { city, category, priceRange, wheelChairAccessible, openLate } = searchCriteria

    // Handles click events for dropdown menus
    function clickChoice(e) {
        dispatch({
            key: e.target.classList[0],
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
                    {city || 'select city'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <DropdownItem className='city' onClick={clickChoice}>Fresno</DropdownItem>
                    <DropdownItem className='city' onClick={clickChoice}>Garden Grove</DropdownItem>
                    <DropdownItem className='city' onClick={clickChoice}>Long Beach</DropdownItem>
                    <DropdownItem className='city' onClick={clickChoice}>Los Angeles</DropdownItem>
                    <DropdownItem className='city' onClick={clickChoice}>Oakland</DropdownItem>
                    <DropdownItem className='city' onClick={clickChoice}>Sacramento</DropdownItem>
                    <DropdownItem className='city' onClick={clickChoice}>San Diego</DropdownItem>
                    <DropdownItem className='city' onClick={clickChoice}>San Francisco</DropdownItem>
                    <DropdownItem className='city' onClick={clickChoice}>San Jose</DropdownItem>
                    <DropdownItem className='city' onClick={clickChoice}>Santa Ana</DropdownItem>
                </Dropdown.Menu>
            </Dropdown>
        </Modal.Body>
    </Modal>
)
}

export default SearchFilters