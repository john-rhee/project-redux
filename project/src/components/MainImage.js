import React from 'react';

const MainImage = props => {
  return (
    <div>
      Coming Soon !

      {/* <img src={} /> */}

      <button 
        className="button"
        onClick={() => { 
            props.getDog();    
        }}
      >Dog</button>

    </div>
  );
};

export default MainImage;