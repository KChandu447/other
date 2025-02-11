import React from 'react'
import './RydeSearchBar.css';

function RydeSearchBar() {
  function Imgmove(){
    alert("hello");
  }
  return (
    <div>
      <div id="outer">
        <div id="hed">
          <div className="hed1">outstation</div>
          <div className="hed1">hourly rental</div>
          <div className="hed1">airport transport</div>
        </div>
        <div id="main">
          <img id="send" src="https://www.redbus.in/bushire/static/icons/ArrowSwap.svg" alt="" />
          <div id="pick">
            <img id='up' src="https://www.redbus.in/bushire/static/icons/LeadgenIcons/CabBP.svg" alt="" />
            <input id='pickup' type="text" required="" /><label htmlFor="">Pick up location</label>
          </div>
          <div id="drop">
          <img id='down' src="https://www.redbus.in/bushire/static/icons/LeadgenIcons/CabDP.svg" alt="" />
            <input id='pickdown' type="text" required="" /><label htmlFor="">Destination location</label>
          </div>
          <div id="date">
          <img id='dateimg' src="https://www.redbus.in/bushire/static/icons/LeadgenIcons/Calendar.svg" alt="" />
            <input id='dateup' type="text" required="" /><label htmlFor="">pickup date & time</label>
          </div>
          <div id="end">
          <input id='enddown' type="checkbox" required="" /><label htmlFor="">pickup date & time</label>
          </div>
          <div id="search">search</div>
        </div>

      </div>
    </div>
  )
}

export default RydeSearchBar;