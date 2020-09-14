import React from 'react';

const MainImage = props => {
  return (
    <div>
      Coming Soon !

      {/* <img src={} /> */}

      <button 
        className="button"
        onClick={() => { 
            // props.getDog(); 
            console.log(props)   
        }}
      >Dog</button>

    </div>
  );
};

export default MainImage;