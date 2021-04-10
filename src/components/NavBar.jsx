import React from 'react'
import {NavLink} from 'react-router-dom'








const NavBar = () => (

    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
     <div className="navbar-brand">    
        Stock Exchange 
        <div className="navbar-nav nav-item">
            <NavLink className="nav-item nav-link" 
                     to='/'
                     exact
            >  
            Home 
            </NavLink>
            <NavLink className="nav-item nav-link" 
                     to='/about'
            >  
            About 
            </NavLink>
         </div>
     </div>
    </nav>

)


export default NavBar





