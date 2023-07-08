import React from 'react'
import { useState } from 'react';
export default function Navbar() {
    function handleMouseOver(event){
        event.target.style.color = 'green'
    }
    const [clickcol,  setclickcol] = useState()
    function handleMouseOut(event) {
        // Modify the styles when the mouse leaves the element
        event.target.style.color = 'grey';
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" onClick={handleMouseOver} >HOME</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>PROFESSIONAL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>EXPERIANCE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
