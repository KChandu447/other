import "../../Components/Navbar/Navbar.css";
import { BiUserCircle } from "react-icons/bi";
import { TfiHeadphoneAlt, TfiLinkedin} from "react-icons/tfi";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar_wrapper" style={{ display: "flex" }}>
        <div style={{ display: "flex", gap: "50px", width: "60%" }}>
          {/* logo */}
          <div>
            <img
              src="https://st.redbus.in/Images/rdc/rdc-redbus-logo.svg"
              alt=""
            />
          </div>
          {/* <div className="nav_middle_sec" style={{ display: "flex" }}> */}
          {/* Home BUS tickets */}
          <Link to="/">
          <div>|</div>
          <div>
            <img
              src="https://st.redbus.in/web/images/layout/rb_vertical.svg"
              alt=""
            />
            <p>Bus Tickets</p>
          </div>
          </Link>
          {/* ****** */}
          {/* HOme Ryde page */}
          <Link to="/Ryde">
          <div>
            <img
              src="https://st.redbus.in/web/images/layout/ryde_vertical.svg"
              alt=""
            />
            <p>Cab Rental</p>
          </div>
          </Link>
          
          {/* -------- */}
          {/* home ryde rail */}
          <Link to="/RydeRail">
          <div>
            <img
              src="https://st.redbus.in/web/images/layout/rail_vertical.svg"
              alt=""
            />
            <p>Train Tickets</p>
          </div>
          </Link>
          {/* ---------- */}
          {/* </div> */}
        </div>

        <div style={{ display: "flex" }}>
          <div>
            {/* <img
              src="https://st.redbus.in/web/images/layout/rb_vertical.svg"
              alt=""/>*/}
            <TfiHeadphoneAlt></TfiHeadphoneAlt>
            Help
          </div>
          <div>
            {/* <img
              src="https://st.redbus.in/web/images/layout/rb_vertical.svg"
              alt=""
            /> */}
            <BiUserCircle></BiUserCircle>
             Account
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;