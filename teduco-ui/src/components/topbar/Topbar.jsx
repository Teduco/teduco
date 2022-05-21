import React from 'react'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Person, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topbarLeft">
            <span className="logo">teduco</span>

            </div>
            
        <div className="topbarRight">

            <div className="topbarIconContainer">
            <NotificationsNoneIcon/ >
            <span className="topIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
            <Settings/ >
            <span className="topIconBadge">2</span>
            </div>

            <div className="topbarIconContainer">
            <Person/>
            <span className="topIconBadge">2</span>
            </div>

            <img src="https://pbs.twimg.com/profile_images/1355974929464909830/oZ5YqrqS_400x400.jpg" alt="Delikanlı" className="topAvatar" />

        </div>


    </div>

    </div>
  )
}
