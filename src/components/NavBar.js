import { useEffect, useState } from "react"
import { Col, Row, Dropdown, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { HiMail, HiCog } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import DropdownListItem from "./DropdownListItem"

const NavBar = () => {
const [sessionId, setSessionId] = useState(null)
const [option, setOption] = useState('')
const navigate = useNavigate()

useEffect(() => {
    navigate(`/users/authentication/${option}`)
},[option])

function userAuthClick(e) {
    switch(e.target.text) {
        case 'Log In':
            setOption('login')
            break
        case 'Sign Up':
            setOption('signup')
            break
        default:
            break
    }
}

return (
    <Navbar>
        <Row>
            <Col>
                <Link to='/home'>Meet 'N Eat</Link>
                <Link to='/faq'>FAQ</Link>
            </Col>
            <Col>
                <Link to='/message-center' style={{color: 'black'}}><HiMail size={40}/></Link>
                {sessionId ? 
                    <Link to='/profile' style={{color: 'black'}}><CgProfile size={40}/></Link>
                    : (
                        <Dropdown>
                            <Dropdown.Toggle  id='login-signup-select'>
                                <CgProfile size={40}/>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {['Log In', 'Sign Up'].map((text, index) => <DropdownListItem className={'user-auth'} onClick={userAuthClick} itemName={text} key={index}/>)}
                            </Dropdown.Menu>
                        </Dropdown>
                    )
                }
                <Link to='/profile/settings' style={{color: 'black'}}><HiCog size={40}/></Link>
            </Col>
        </Row>
    </Navbar>
)
}

export default NavBar