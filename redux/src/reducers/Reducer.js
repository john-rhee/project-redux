import { GET_DOG, GET_CAT } from '../actions/Actions.js'

const initialState = {

    dog: {
      
      image:
        'https://na.com/na.jpg',
      
    },

    cat: {
      
        image:
          'https://na.com/na.jpg',
        
      }
    
  };

  export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DOG:
        return {
            ...state
        }

        case GET_CAT:
            return {
                ...state
            }  

        default:
            return state;
    }
  };  