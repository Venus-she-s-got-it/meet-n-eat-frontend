import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Card, ButtonGroup, Button, Row, Col } from "react-bootstrap"
import { UrlContext } from "../App"
import { formatDateTime } from "../data-and-functions/formatDateTime"


const FriendRequest = ({ request, noImage }) => {
    const [choice, setChoice] = useState('')
    const [date, time] = formatDateTime(request.createdAt)
    const { url, defaultImage } = useContext(UrlContext)

    function clickHandler(e) {
        setChoice(e.target.classList[0])
    }

    useEffect(() => {
        switch(choice) {
            case 'accept':
                axios.put(`${url}/users/${request.recipient._id}`, { newFriend: request.sender_id, removeRequest: request._id})
                setChoice('')
                break

            case 'decline':
                axios.put(`${url}/users/${request.recipient._id}`, { removeRequest: request._id})
                setChoice('')
                break

            default:
                break
        }
    }, [choice])

return (
    <Card className='d-flex flex-row justify-content-center align-items-center' style={{ width: '70%', padding:'1%' }}>
        <div style={{ width:'20%'}} >      
            <Card.Img style={{ width:'60%' }} variant="top" src={request.sender.profileimg || defaultImage} />
            <Card.Text>{request && request.sender.displayname}</Card.Text>
        </div>
        <Card.Body>
            <Row>
                <Col>
                    <Card.Text>{request.message}</Card.Text>
                </Col>
                <Col>
                    <ButtonGroup style={{float:'right', display:'flex', justifyContent:'space-around', width:'80%'}} aria-label="Basic example">
                        <Button 
                            className='accept' 
                            style={{ borderRight:'3px solid white' }} 
                            variant="secondary"
                            onClick={clickHandler}                            
                        >Accept</Button>
                        <Button 
                            className='decline' 
                            variant="secondary"
                            onClick={clickHandler}
                        >Decline</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Card.Body>
        <Card.Footer>
            <Card.Text>{date}</Card.Text>
            <Card.Text>{time}</Card.Text>
        </Card.Footer>
    </Card>
)
}

export default FriendRequest