import { Card, ListGroup } from "react-bootstrap"

const Message = ({ message }) => {
    const noImage = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    const dateObj = new Date(message.createdAt)
    const date = dateObj.toLocaleDateString()
    const time = dateObj.toLocaleTimeString("en", { timeStyle: 'short' })

return (
    <Card style={{ width: '70%',display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', padding:'1%' }}>
        <div style={{ width:'20%'}} >
            <Card.Img style={{ width:'60%' }} variant="top" src={message.sender.profileimg || noImage } />
            <Card.Text>{message && message.sender.username}</Card.Text>
        </div>
        <Card.Body>
            <Card.Text>{message && `subject: ${message.subject}`}</Card.Text>
            <Card.Text>{message && message.body}</Card.Text>
        </Card.Body>
            <Card.Footer>
                <ListGroup.Item>{message && date}</ListGroup.Item>
                <ListGroup.Item>{message && time}</ListGroup.Item>
            </Card.Footer>
    </Card>
)
}

export default Message