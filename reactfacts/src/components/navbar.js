import React from "react"
import logo from "./logo.svg"


export default function NavBar() {
    return (
        <nav className="nav">
           <img className="nav--icon" src={logo} alt="logo" />
           <h3 className="nav--logo_text">React Facts</h3>
           <h4 className="nav--title">React-Course Project 1</h4>
        </nav>
    )
}