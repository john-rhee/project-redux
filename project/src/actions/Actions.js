import axios from 'axios';

export const GET_DOG = 'GET_DOG';
export const GET_CAT = 'GET_CAT';
export const GET_BOTH_DOG = 'GET_BOTH_DOG';
export const GET_BOTH_CAT = 'GET_BOTH_CAT';
export const GET_FAILURE = 'GET_FAILURE';

export const CAT_ONLY = 'CAT_ONLY';
export const DOG_ONLY = 'DOG_ONLY';

export const KOREAN_ON = 'KOREAN_ON';

// export const getDog = argument => {
//   return { type: GET_DOG, payload: argument };
// };

export const getCat = () => dispatch => {

    axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then(res => {
            console.log('get cat res',res)
            dispatch({type:GET_CAT,payload:res.data[0].url})
            dispatch({type:CAT_ONLY,payload:true})
        })
        .catch(error => {
            
            dispatch({type:GET_FAILURE,payload:error})
    })
    
};

export const getDog = () => dispatch => {
    
    axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            console.log('get dog res',res)
            dispatch({type:GET_DOG,payload:res.data.message})
            dispatch({type:DOG_ONLY,payload:true})
        })
        .catch(error => {
            
            dispatch({type:GET_FAILURE,payload:error})
    })
    
};

export const getBoth = () => dispatch => {
    
    axios
        .get('https://dog.ceo/api/breeds/image/random')
        .then(res => {
            console.log('get dog res',res)
            dispatch({type:GET_BOTH_DOG,payload:res.data.message})
        })
        .catch(error => {
            
            dispatch({type:GET_FAILURE,payload:error})
    })

    axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then(res => {
            console.log('get cat res',res)
            dispatch({type:GET_BOTH_CAT,payload:res.data[0].url})
            
        })
        .catch(error => {
            
            dispatch({type:GET_FAILURE,payload:error})
    })
    
};

export const koreanOn = () => dispatch => {   
    
    dispatch({type:KOREAN_ON})
    
};