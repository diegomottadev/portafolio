import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({toggleSiderbar,page}) => {

  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        {/* <img src={logo} alt="logo"></img> */}
        <button type="button" className="toggle-btn" onClick={toggleSiderbar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div>
      <PageLinks styleClass="nav-links" page={page}></PageLinks>
    </div>
  </nav>
}

export default Navbar
