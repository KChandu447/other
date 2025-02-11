// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Ryde from './Components/Pages/Rydes/Ryde';
import RydeRail from './Components/Pages/RydeRail';
import CarRental from './Components/Pages/Rydes/CarRental';
import Hatchback from './Components/Ryde/CarRental/Hatchback';
import Suv from './Components/Ryde/CarRental/Suv';






const trendingOffers = [
  {
    imgLink:
      "https://st.redbus.in/images/FIRST/first_26th_sep_2022_ravi/tile-80X80.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#1D4DA5",
  },
  {
    imgLink: "http://st.redbus.in/Images/INDOFFER/SUPERHIT/80x80_SUPERHIT.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#387A79",
  },
  {
    imgLink: "https://st.redbus.in/Images/INDOFFER/BUS200/80x80_BUS200.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#72171C",
  },
  {
    imgLink: "https://st.redbus.in/Images/INDOFFER/RB200/80x80_RB200.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#2F95AE",
  },
  {
    imgLink: "https://st.redbus.in/Images/APSRTC/new/APSRTC_3.png",
    title: "Save up to Rs 250 on bus tickets",
    vehicle: "Bus",
    couponCode: "FIRST",
    validUpto: "Valid till 31 Aug",
    backgroundColor: "#1D4DA5",
  },
];

const PartneredRTCs = [
  {
    imgLink: "https://st.redbus.in/buslogos/country/ind/logo_group/10283.png",
    title: "APSRTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/GSRTC.svg",
    title: "GSRTC",
  },
  {
    imgLink: "https://st.redbus.in/Images/carousel/TSRTC.png",
    title: "TSRTC",
  },
  {
    imgLink: "https://st.redbus.in/buslogos/country/ind/logo_group/10823.png",
    title: "MSRTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/KERALA-RTC.svg",
    title: "Kerala RTC",
  },
  {
    imgLink: "https://st.redbus.in/buslogos/country/ind/logo_group/16426.png",
    title: "SBSTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/RSRTC.svg",
    title: "RSRTC",
  },
  {
    imgLink: "https://s3.rdbuz.com/web/images/homeV2/rtc/UPSRTC.svg",
    title: "UPSRTC",
  },
];
const GlobalPresenceCountries = [
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Colombia.svg",
    title: "Colombia",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/India.svg",
    title: "India",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Indonesia.svg",
    title: "Indonesia",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Malaysia.svg",
    title: "Malaysia",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Peru.svg",
    title: "Peru",
  },
  {
    imgLink:
      "https://s3.rdbuz.com/web/images/homeV2/LATAM/GlobalPresence/Singapore.svg",
    title: "Singapore",
  },
];
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Navbar></Navbar>
      </nav> 
      {/* input type="search" */}
      
       {/* Trending-Offers */}
       <Routes>
       
<Route path="/" element={<Home first={trendingOffers}  
      PartneredRTCs={PartneredRTCs} 
       GlobalPresenceCountries={GlobalPresenceCountries}></Home> }></Route>
<Route path="/Ryde" element={<Ryde></Ryde>}></Route>
<Route path="/RydeRail" element={<RydeRail></RydeRail>}></Route>
<Route path="/CarRental" element={<CarRental></CarRental>}></Route>
<Route path="/Hatchback" element={<Hatchback></Hatchback>}></Route>
<Route path="/Suv" element={<Suv></Suv>}></Route>
</Routes>
  </BrowserRouter>
  
      
         {/* Primo Cards Section */}
      {/* ******************* */}
       {/* PARTNERED WITH RTC's Section  */}
       {/* ******************* */}
      {/* GOLBAL PRESENCE */}
      {/* ******************* */}
      {/* ryde page */}
    
      
      </div>
  );
}
export default App;
