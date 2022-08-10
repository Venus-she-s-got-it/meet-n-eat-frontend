import axios from "axios"

export function axiosAll(method, path, authToken, dispatch, body) {
   const headers = { headers: { Authorization: `Bearer ${authToken}`}}
   switch(method) {
      case 'GET':
         axios.get(`http://localhost:8000${path}`, headers)
            .then(res => {
               dispatch({
                  key: response,
                  value: res
               })
            })
         break
      
      case 'PUT':
         axios.put(`http://localhost:8000${path}`,body, headers)
         break

      case 'POST':
         axios.post(`http://localhost:8000${path}`,body, headers)
         break

      case 'DELETE':
         axios.delete(`http://localhost:8000${path}`, headers)
         break

      default:
         break
   }
}