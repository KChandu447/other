import React from "react";
import './BookSteps.css'

const Redbustotaldata = [
  {
    Image: "https://www.redbus.in/bushire/static/mwebv2/home/1%20(1).svg",
    para: "Give us your trip details",
    imagelink:
      "https://www.redbus.in/bushire/static/mwebv2/ryde/home/how-to%20copy.svg",
  },
  {
    Image: "https://www.redbus.in/bushire/static/mwebv2/home/2%20(2).svg",
    para: "See the Wide range of veheicles",
    imagelink:
      "https://purepng.com/public/uploads/large/purepng.com-red-busbusvehiclecarrying-passengerslarge-motor-vehiclecoachminibus-1701528460580qhzm6.png",
  },
  {
    Image: "https://www.redbus.in/bushire/static/mwebv2/home/3.svg",
    para: "Get what you book and go places",
    imagelink:
      "https://www.redbus.in/bushire/static/mwebv2/ryde/home/Component%2011.png",
  },
];
function BookSteps() {
  return (
    <div className="line">
      {Redbustotaldata.map((x) => {
        return (
          <div className="card">
            <img width={"20px"} src={x.Image} alt="" />
            <p>{x.para} </p>
            <img src={x.imagelink} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default BookSteps;