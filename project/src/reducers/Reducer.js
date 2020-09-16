import { 
    GET_DOG, 
    GET_CAT,
    CAT_ONLY,
    DOG_ONLY,
    GET_BOTH_DOG,
    GET_BOTH_CAT,
    KOREAN_ON

} from '../actions/Actions.js'

const initialState = {

    dog: {    
    },

    cat: {   
    },

    catOnly: false,

    dogOnly: false,

    korean: false
    
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
                ...state,
            cat: {image: action.payload}
            } 
            
        case DOG_ONLY:
            return {
                ...state,
                dogOnly: action.payload,
                catOnly: false
            }
            
        case CAT_ONLY:
            return {
                ...state,
                catOnly: action.payload,
                dogOnly: false
            } 
            
        case GET_BOTH_DOG:
            return {
                ...state,
                dog: {image: action.payload},
                dogOnly: true
            }     
            
        case GET_BOTH_CAT:
            return {
                ...state,
                cat: {image: action.payload},
                catOnly: true
            }  
            
        case KOREAN_ON:
            return {
                ...state,
                korean: !state.korean
            }      

        default:
            return state;
    }
  };  