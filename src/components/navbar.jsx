import React, { Component } from 'react';

const NavBar = (props) => {
    return (<nav className="navbar navbar-expand-sm bg-light">
            <ul className="navbar-nav">
                    <li className="nav-item">
                        Counter Application                                  
                    </li>
                    <li>
                          {props.totalCounter}  
                    </li>    
            </ul>
            </nav>);
}


export default NavBar;