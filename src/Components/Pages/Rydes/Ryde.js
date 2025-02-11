import React from 'react'
import './Ryde.css';
// import Vehiclesulike from './vehiclesulike';
import VechilesYoucanBook from '../../Ryde/VechiclesYoucanBook'
import RydeFacilities from '../../Ryde/RydeFacilities'
import RydeFooter from '../../Footer/Ryde/RydeFooter'
import CustomerReviews from '../../Ryde/CustomerReviews'
import MoreAboutRyde from '../../Ryde/MoreAboutRyde'
import RydeFAQ from '../../Ryde/RydeFAQs/RydeFAQ'
import BookSteps from '../../Ryde/BookSteps'
import ViewOffers from '../../Ryde/ViewOffers'
import RydeSearchBar from '../../Ryde/RydeSearchBar'
import RydeNavbar from '../../Navbar/RydeNavbar'
import {Link} from "react-router-dom";



const vehiclesulike=[{
  bgImg: 'url("https://www.redbus.in/bushire/static/mwebv2/ryde/webhome/Group5.svg")',
  heading:"Hatchbacks and Sedans",
  para:"Ideal for about 2-4 people",
  
},{
  bgImg: 'url("https://www.redbus.in/bushire/static/mwebv2/ryde/webhome/Group6.svg")',
  heading:"SUVs",para:"Ideal for about 4-7 people"
},{
  bgImg: 'url("	https://www.redbus.in/bushire/static/mwebv2/ryde/webhome/Group7.svg")',
  heading:"Tempo Travellers",para:"Ideal for 8-16 people"
},{
  bgImg: 'url("https://www.redbus.in/bushire/static/mwebv2/ryde/webhome/Group8.svg")',
  heading:"Buses and Mini Buses",para:"Ideal for more than 18 people"
}]



function Ryde() {
  return (
    <>
    <RydeNavbar></RydeNavbar>
    <RydeSearchBar></RydeSearchBar>
    <ViewOffers></ViewOffers>
    <Link to="/CarRental">
    <div class="VechilesYoucanBook">
      {
        vehiclesulike.map((u)=>{
          return <VechilesYoucanBook
          bgImg={u.bgImg} 
        key={u.heading} 
        heading={u.heading} 
        para={u.para}>

        </VechilesYoucanBook>

        })
        }
        </div>
        </Link>
       <CustomerReviews></CustomerReviews>
       <h3>Book in 3 easy steps</h3>
       <BookSteps></BookSteps>
       <MoreAboutRyde></MoreAboutRyde>
       <RydeFAQ></RydeFAQ>
        <RydeFacilities></RydeFacilities>
        <RydeFooter></RydeFooter>
        
  </>
  )
}

export default Ryde