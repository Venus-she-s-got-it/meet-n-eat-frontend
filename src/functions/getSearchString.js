// Creates search parameters from the search filter options selected
export function getSearchString(searchCriteria) {
   // deconstruct searchCriteria
   const { searchString, city, category, priceRange, wheelChairAccessible, openLate } = searchCriteria

   // set searchString to results path along with user input
   let searchParams
   searchString ?
      (searchParams = '/results/' + searchString.toLowerCase())
      : (searchParams = '/results/blank')
      
   // add search parameters according to which filter options were selected
   city !== 'select city' && (searchParams += `?city=${city}`)
   category && (searchParams += `&category=${category.toLowerCase()}`)
   priceRange && (searchParams += `&priceRange=${priceRange}`)
   wheelChairAccessible && (searchParams += `&wheelChairAccessible=${wheelChairAccessible}`)
   openLate && (searchParams += `&openLate=${openLate}`)
   
   return searchParams
}