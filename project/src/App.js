import React, { useState, useEffect } from "react";
import MainImage from './components/MainImage';
import { getDog } from './actions/Actions';
import { connect } from 'react-redux';

import axios from 'axios';

import './App.css';

const App = props => {

  //Initial test getting dogs and cats images
  const [dog, setDog] = useState();
  const [cat, setCat] = useState();

  useEffect(() => {
    axios
           .get('https://dog.ceo/api/breeds/image/random')
          .then(res => {
              console.log('get dog image',res.data.message)  
              setDog(res.data.message);
              

          })
          .catch(error => {
            console.log('get dog error',error)    
      });
  }, []);     

  useEffect(() => {
    axios
          .get('https://api.thecatapi.com/v1/images/search')
          .then(res => { 
              console.log('get cat image',res.data[0].url)
              setCat(res.data[0].url);

          })
          .catch(error => {
            console.log('get dog error',error)    
      });
  }, []);  

  const getDogImage = () => {
    props.getDog()
  };

  console.log(props.dog)

  return (
    <div className="App">

      <div>Redux Cats or Dogs</div>

      {/* <img src={dog} />;

      <img src={cat} />; */}

      <img src={props.dog} />;

      <MainImage getDog = {getDogImage}/>
      
    </div>
  );
}

const dispatchToProps = {
  getDog
};

const mapStateToProps = state => {
  return {
    dog: state.dog,
    cat: state.cat
  };
};

export default connect(mapStateToProps,dispatchToProps)(App)
