import React from "react";
import "./topbar.css";
import { NotificationsNone} from "@material-ui/icons";

export default function Topbar() {
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
          <img src="https://pbs.twimg.com/profile_images/1355974929464909830/oZ5YqrqS_400x400.jpg" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}