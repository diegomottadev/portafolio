import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen,setIsOpen] = React.useState(false)
  const toggleSiderbar = () =>{
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Navbar toggleSiderbar={toggleSiderbar}/>
      <Sidebar isOpen={isOpen} toggleSiderbar={toggleSiderbar}/>
        {children}
      <Footer />
    </>
  )
}

export default Layout
