import React, { useState, useEffect } from "react";
import MainImage from './components/MainImage';
import { getDog, getCat, getBoth, koreanOn } from './actions/Actions';
import { connect } from 'react-redux';

import axios from 'axios';

import './App.css';

const App = props => {

  //Initial test getting dogs and cats images
  // const [dog, setDog] = useState();
  // const [cat, setCat] = useState();

  // useEffect(() => {
  //   axios
  //          .get('https://dog.ceo/api/breeds/image/random')
  //         .then(res => {
  //             console.log('get dog image',res.data.message)  
  //             setDog(res.data.message);
              

  //         })
  //         .catch(error => {
  //           console.log('get dog error',error)    
  //     });
  // }, []);     

  // useEffect(() => {
  //   axios
  //         .get('https://api.thecatapi.com/v1/images/search')
  //         .then(res => { 
  //             console.log('get cat image',res.data[0].url)
  //             setCat(res.data[0].url);

  //         })
  //         .catch(error => {
  //           console.log('get dog error',error)    
  //     });
  // }, []);  

  const getDogImage = () => {
    props.getDog()
  };

  const getCatImage = () => {
    props.getCat()
  };

  const getBothImages = () => {
    props.getBoth()
  };

  const korean = () => {
    props.koreanOn()
  };

  console.log(props.dog)
  console.log(props.cat)
  console.log(props.koreanLang)

  return (
    <div className="App">

      

      {props.koreanLang  ? 
      
      <button 
        className="button"
        onClick={() => { 
          korean();   
        }}
      >English/영어</button>

      : (
        
        <button 
        className="button"
        onClick={() => { 
          korean();   
        }}
      >Korean/한국어</button>

      )}

      {props.koreanLang  ? 
      
        <div>개 고양이 리덧스 프로그램</div>

        : (
          
        <div>Redux Cats or Dogs</div>

      )}

      {props.koreanLang  ? 
      
        <div>개 아니면 고양이를 골라주세요</div>

        : (
          
        <div>Choose a dog or a cat</div>

      )}



      {/* <img src={dog} />;

      <img src={cat} />; */}

      <MainImage getDog = {getDogImage} getCat = {getCatImage} getBoth = {getBothImages} 
      dogImg = {props.dog} catImg = {props.cat} allState ={props} koreanLang ={props.koreanLang}  />
      
    </div>
  );
}

const dispatchToProps = {
  getDog,
  getCat,
  getBoth,
  koreanOn
};

const mapStateToProps = state => {
  return {
    dog: state.dog,
    dogOn: state.dogOnly,
    cat: state.cat,
    catOn: state.catOnly,
    koreanLang: state.korean
  };
};

export default connect(mapStateToProps,dispatchToProps)(App)
