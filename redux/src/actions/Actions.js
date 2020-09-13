import axios from 'axios';

export const GET_DOG = 'GET_DOG';
export const GET_FAILURE = 'GET_FAILURE';

export const GET_CAT = 'GET_CAT';

// export const getDog = argument => {
//   return { type: GET_DOG, payload: argument };
// };

export const getCat = argument => {
    return { type: GET_CAT, payload: argument };
  };


export const getDog = () => dispatch => {
    
    axios()
        .get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            console.log('get dog res',res)
            dispatch({type:GET_DOG,payload:res.data})
        })
        .catch(error => {
            dispatch({type:GET_FAILURE,payload:error})
    })
    
};