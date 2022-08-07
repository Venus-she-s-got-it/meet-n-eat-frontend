import { Modal, Dropdown, Row, Col } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { categoriesArray } from '../data-and-functions/categoriesArray'
import { citiesArray } from '../data-and-functions/citiesArray'
import { priceRangeArray } from '../data-and-functions/priceRangeArray'
import DropdownListItem from './DropdownListItem'

const SearchFilters = ({ searchCriteria, dispatch, filterClick, showFilters }) => {
    const { city, category, priceRange } = searchCriteria

    // Handles click events for dropdown menus
    function dropdownChoice(e) {
        e.target.text !== 'None' ?
        dispatch({
            key: e.target.classList[0],
            value: e.target.text
        })
        : dispatch({
            key: e.target.classList[0],
            value: ''
        })
    }

    // Handles click events for checkbox items
    function checkboxClick(e) {
        searchCriteria[e.target.classList[0]] ?
        dispatch({
            key: e.target.classList[0],
            value: ''
        })
        : dispatch({
            key: e.target.classList[0],
            value: e.target.value
        })
    }

    return (
        <Modal show={showFilters} onHide={filterClick}>
            <Modal.Header closeButton>
                <Modal.Title>Filter Options</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row xs='3'>
                    <Dropdown>
                        <Dropdown.Toggle id='city-select'>
                            {city || 'select city'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {citiesArray.map((city, index) => <DropdownListItem className='city' onClick={dropdownChoice} itemName={city} key={index}/>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle id='category-select'>
                            {category || 'select category'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {categoriesArray.map((category, index) => <DropdownListItem className='category' onClick={dropdownChoice} itemName={category} key={index}/>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <DropdownToggle id='price-range-select'>
                            {priceRange || 'select price range'}
                        </DropdownToggle>
                        <Dropdown.Menu>
                            {priceRangeArray.map((price, index) => <DropdownListItem className='priceRange' onClick={dropdownChoice} itemName={price} key={index}/>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
                <label>
                    <input type='checkbox' className='wheelchairAccessible' value='yes' onClick={checkboxClick}/>
                    Wheelchair Accessible
                </label>
                <label>
                    <input type='checkbox' className='openLate' value='yes' onClick={checkboxClick}/>
                    Open Late
                </label>
            </Modal.Body>
        </Modal>
    )
}

export default SearchFilters