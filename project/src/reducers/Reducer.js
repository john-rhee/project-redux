import { GET_DOG, GET_CAT } from '../actions/Actions.js'

const initialState = {

    dog: {    
    },

    cat: {   
    }
    
  };

  export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_DOG:
        return {
            ...state,
            dog: {image: action.payload}
        }

        case GET_CAT:
            return {
                ...state
            }  

        default:
            return state;
    }
  };  