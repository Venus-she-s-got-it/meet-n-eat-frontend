import axios from 'axios'
import { axiosAll, axiosReducer } from '../data-and-functions/axiosAll';

export function reviewStars() {

    // '/:restaurantId/reviews'
    // 62ef031d30bddbafcc0ba7c5

    const initialState = {
        stars: null
    }
    axiosAll('GET', `/restaurants/62ef031d30bddbafcc0ba7c5/reviews`, loggedInUser.token, dispatch)

    const [starState, dispatch] = useReducer(axiosReducer, initialState)
    
    {reviews.map(review => 
        review.stars)}
    for (let i=0; i < review.stars.length; i++) {
        const sum = review.stars.reduce((a, b) => a + b, 0)
        const avg = sum / review.stars.length
        const roundedAvg = Math.round((avg) * 2, MindpointRounding.AwayFromZero) / 2
        } return roundedAvg
        
    // const oneicon = '1'
    // const twoicon = '2'
    // const threeicon = '3'
    // const fouricon = '4'
    // map over reviews
    // review.rating 

    // const starMenu = ['1', '2', '3', '4', '5']
    // for (let i=0; i < stars.length; i++) {
    //     stars[i
    // }


}