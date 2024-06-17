import React from 'react'
import "./css/NavBar.css"
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

function NavBar() {

  return (

    <div className='NavBar-container'>

            <div className='NavBar-LeftSide'>

             <Avatar sx={{ bgcolor: deepOrange[500] }}>B</Avatar>
             <i className="fas fa-envelope"></i> {/* Message icon */}
             <i className="fas fa-bell"></i> {/* Notification icon */}

            </div>

            <div className='NavBar-MidleSide'>
             <i className="fas fa-home"></i> {/* Home icon */}
             <i className="fas fa-chart-bar"></i> {/* Chart icon */}
             <i className="fas fa-plus-circle"></i> {/* Add more icon */}

           

            </div>
            <div className='NavBar-RightSide'>
             <i className="fas fa-search"></i> {/* Search icon */}
              TRADEHUB {/* Logo */}

            </div>

    </div>
  )
}

export default NavBar