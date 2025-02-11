import React from 'react';



function VechilesYoucanBook (p) {
  return (
    
    <div style={{
     backgroundImage:p.bgImg,
      border:"1px solid transparent",
       backgroundRepeat:"no-repeat",
      borderRadius:"5px",
      width:"150%",
      minHeight:"230px",
      padding:"15px"
      }}>
      <h3>{p.heading}</h3>
      <p>{p.para}</p>
      </div>
      
  )
}

export default VechilesYoucanBook