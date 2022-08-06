// Creates search parameters from the search filter options selected
export function getSearchString(searchCriteria) {
   if(!searchCriteria) return
   // Create an array of keys from searchCriteria object
   const keyArray = Object.keys(searchCriteria)
   
   // Declare searchString and set the base path depending on whether a search string was entered by the user
   let searchString
   searchCriteria.searchString ?
      (searchString = '/results/' + searchCriteria.searchString.toLowerCase())
      : (searchString = '/results/blank')
   
   // Add search criteria that have a value as query parameters in searchString
   for(let i=1; i < keyArray.length; i++) {
      searchCriteria[keyArray[i]] && (
         searchString.includes('?') ?
         (searchString += `&${keyArray[i]}=${searchCriteria[keyArray[i]]}`)
         : (searchString += `?${keyArray[i]}=${searchCriteria[keyArray[i]]}`)
      )  
   }
   
   return searchString
}