import { useEffect, useState } from "react"
import { Col, Row, NavDropdown, Navbar, Container } from "react-bootstrap"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { HiMail, HiCog } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'

const NavBar = () => {
const [sessionId, setSessionId] = useState(true)
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
    <Navbar expand='lg'>
        <Container>
            <Row>
                <Col>
                    <Link to='/home'>
                        <Navbar.Brand>MEET 'N EAT</Navbar.Brand>
                    </Link>
                    <Link to='/faq'>FAQ</Link>
                </Col>
                <Col> 
                    <NavLink to='/message-center' style={{color: 'black'}}><HiMail size={40}/></NavLink>
                    {sessionId ?
                        <NavLink to='/profile' style={{color: 'black'}}><CgProfile size={40}/></NavLink>
                        : (
                            <NavDropdown className="nav-dropdown d-inline-block" title={<CgProfile size={40}/>}>
                                {['Log In', 'Sign Up'].map((text, index) => <NavDropdown.Item onClick={userAuthClick} key={index}>{text}</NavDropdown.Item>)}
                            </NavDropdown> 
                        )
                    }
                    <Link to='/profile/settings' style={{color: 'black'}}><HiCog size={40}/></Link>
                </Col>
            </Row>
        </Container>
    </Navbar>
)
}

export default NavBar