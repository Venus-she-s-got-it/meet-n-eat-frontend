import { useContext } from "react"
import { Card, Row, Col } from "react-bootstrap"
import { UrlContext } from "../App"

const FriendCard = ({ friend }) => {
const { defaultImage } = useContext(UrlContext)

return (
    <Card style={{ width: '90%', padding:'3%', marginBottom:'5%'}}>
        <Row>
            <Col>
                <Card.Img variant="top" src={friend.profileimg || defaultImage} />
            </Col>
            <Col>
                <Card.Body>
                    <Card.Title>{friend.username}</Card.Title>
                    <Card.Text>  {friend.location} </Card.Text>
                </Card.Body>
            </Col>
        </Row>
    </Card>
)
}

export default FriendCard