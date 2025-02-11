import React from 'react'

function GlobalPresence({GlobalPresenceCountries}) {
  return (
    <>
    <div className="GlobalPresence">
        <h1>GLOBAL PRESENCE</h1>
        <div className="countries"
         style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginTop: "30px",
          }}>
          {GlobalPresenceCountries.map((x, index) => {
            return (
              <div key={index} className="country">
                <img src={x.imgLink} alt="" />
                <h3>{x.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default GlobalPresence