import React from 'react'
import { Card, OverlayTrigger, Popover, Button } from 'react-bootstrap'

const Event = () => {

return (
<Card style={{ width:'80%', marginBottom:'2%', border:"1px solid #D6300F" }}>
    <Card.Header style={{backgroundColor:'#D6300F', color:'white'}}>Date <span style={{float:'right'}}>Hour</span></Card.Header>
    <Card.Body style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
        <Card.Title>Restaurant's name</Card.Title>
        <Card.Text>  Phone Number  </Card.Text>
        {['bottom'].map((placement) => (
            <OverlayTrigger
            trigger="click"
            key={placement}
            placement={placement}
            overlay={
                <Popover id={`popover-positioned-${placement}`}>
                <Popover.Header style={{backgroundColor:'#F0704E', color:'white'}} as="h3">{`Friends going`}</Popover.Header>
                <Popover.Body>
                    {/* MAP FRIENDS */}
                    <strong>Andrew</strong>
                </Popover.Body>
                </Popover>
            }
            >
            <Button style={{backgroundColor:'white', border:'1px solid #D6300F', color:'black'}}>Who's going?</Button>
            </OverlayTrigger>
        ))}
    </Card.Body>
</Card>
)
}

export default Event