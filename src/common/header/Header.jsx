import React from "react"
import "./Header.css"
import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

const Header = ({ CartItem,sendSearchValue }) => {
    const getSearchValue = (data) => {
        sendSearchValue(data)
    };
  return (
    <>
      {/*<Head />*/}
      <Search CartItem={CartItem} getSearchValeu={getSearchValue} />
      {/*<Navbar />*/}
    </>
  )
}

export default Header
