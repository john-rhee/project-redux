import React from 'react';

const MainImage = props => {

  console.log(props.dogImg)
  console.log(props.allState)

  return (

    <div>

      <div>
        {props.allState.dogOn ? 
          <img src={props.dogImg.image}/>
         : (
          <div/>
        )}
      </div>

      <div>
        {props.allState.catOn ? (
          <img src={props.catImg.image}/>
        ) : (
          <div/>
        )}
      </div>

      {/* <img src={props.dogImg.image} />
      <img src={props.catImg.image} /> */}

      {/* <button 
        className="button"
        onClick={() => { 
            props.getDog();   
        }}
      >I choose a Dog</button> */}

    {props.koreanLang  ? 
      
      <div>
        {props.allState.dogOn && !props.allState.catOn? 

        <button 
        className="button"
        onClick={() => { 
            props.getDog();   
        }}
        >개 사진 하나 더 보기</button>
          
        : (
          
          <button 
        className="button"
        onClick={() => { 
            props.getDog();   
        }}
        >난 개가 더 좋아</button>

        )}

      </div>

      : (
        
      <div>

        {props.allState.dogOn && !props.allState.catOn? 

        <button 
        className="button"
        onClick={() => { 
            props.getDog();   
        }}
        >Show me another dog</button>
          
        : (
          
          <button 
        className="button"
        onClick={() => { 
            props.getDog();   
        }}
        >I choose a dog</button>

        )}

      </div>

    )}

      

      {/* <button   
        className="button"
        onClick={() => { 
            props.getCat();   
        }}
      >I choose a Cat</button> */}

    {props.koreanLang  ? 
      
      <div>
        {props.allState.catOn && !props.allState.dogOn ? 

        <button 
        className="button"
        onClick={() => { 
            props.getCat();   
        }}
        >고양이 사진 하나 더 보기</button>
          
        : (
          
          <button 
        className="button"
        onClick={() => { 
            props.getCat();   
        }}
        >나는 고양이가 더 좋아</button>

        )}
      </div>

      : (
        
      <div>
        {props.allState.catOn && !props.allState.dogOn ? 

        <button 
        className="button"
        onClick={() => { 
            props.getCat();   
        }}
        >Show me another cat</button>
          
        : (
          
          <button 
        className="button"
        onClick={() => { 
            props.getCat();   
        }}
        >I choose a cat</button>

        )}
      </div>

    )}

      

      {/* <button   
        className="button"
        onClick={() => { 
            props.getBoth();   
        }}
      >I like them both</button> */}

    {props.koreanLang  ? 
      
      <div>
        {props.allState.catOn && props.allState.dogOn ? 

        <button 
        className="button"
        onClick={() => { 
            props.getBoth();   
        }}
        >둘 다 더 보기</button>
          
        : (
          
          <button 
        className="button"
        onClick={() => { 
            props.getBoth();   
        }}
        >나는 둘 다 좋아</button>

        )}
      </div>

      : (
        
      <div>
        {props.allState.catOn && props.allState.dogOn ? 

        <button 
        className="button"
        onClick={() => { 
            props.getBoth();   
        }}
        >Show me more of both</button>
          
        : (
          
          <button 
        className="button"
        onClick={() => { 
            props.getBoth();   
        }}
        >I choose both</button>

        )}
      </div>

    )}

      

    </div>
  );
};

export default MainImage;