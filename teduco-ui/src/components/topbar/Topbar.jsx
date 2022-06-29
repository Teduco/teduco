import React from "react";
import "./topbar.css";
import { NotificationsNone} from "@material-ui/icons";
import {Route,Routes, useNavigate} from "react-router-dom"
export default function Topbar() {
  const navigate = useNavigate();

  const navigateToUsers = () => {
    navigate('/user');
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">lamaadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <img onClick={navigateToUsers} src="https://pbs.twimg.com/profile_images/1355974929464909830/oZ5YqrqS_400x400.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}