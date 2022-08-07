export function searchCriteriaReducer(state, object) {
   switch(object.key) {
      case 'searchString': 
         return {...state, searchString: object.value}

      case 'city':
         return {...state, city: object.value}
      
      case 'category':
         return {...state, category: object.value}

      case 'priceRange':
         return {...state, priceRange: object.value}

      case 'wheelchairAccessible':
         return {...state, wheelchairAccessible: object.value}

      case 'openLate':
         return {...state, openLate: object.value}

      default:
         return state
   }
}