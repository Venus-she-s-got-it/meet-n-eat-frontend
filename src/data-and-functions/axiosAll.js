import axios from "axios"

export async function axiosAll(method, path, authToken, dispatch, body) {
   const headers = { headers: { Authorization: `Bearer ${authToken}`}}
   let res
   switch(method) {
      case 'GET':
         res = await axios.get(`http://localhost:8000${path}`, headers)
               dispatch({
                  key: 'response',
                  value: res.data
               })
               console.log(res.data)
         break
      
      case 'PUT':
         res = await axios.put(`http://localhost:8000${path}`,body, headers)
         break

      case 'POST':
         res = await axios.post(`http://localhost:8000${path}`,body, headers)
         !authToken ? dispatch(res.data.token)
               : dispatch({ key: 'response', value: res.data.token })

         
         break

      case 'DELETE':
         res = await axios.delete(`http://localhost:8000${path}`, headers)
         break

      default:
         break
   }
}

export function axiosReducer (state, object) {
   switch(object.key) {
      case 'response':
         return {...state, response: object.value}
      
      case 'searchString':
         return {...state, searchString: object.value}

      case 'username':
         return {...state, username: object.value}

      case 'password':
         return {...state, password: object.value}

      default:
         return state
   }
}