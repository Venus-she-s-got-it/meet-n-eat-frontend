import React from 'react'
import Event from './Event'

const Itinerary = () => {

let today = new Date().toLocaleDateString()
// console.log(today)


return (
    <div>
            <div style={{ margin:'5%', display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center' }}>
                <h2 style={{ borderBottom:'1px solid rgb(211,211,211)' }}>Itinerary</h2>
                <h2> {today} </h2>
            </div>
            <div style={{margin:'5%', height:'80%', display:'flex', flexDirection:'column', alignItems:'center' }}>
                <Event />
                <Event />
                <Event />
            </div>
    </div>
)
}

export default Itinerary