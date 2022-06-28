import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
<<<<<<< HEAD
import SettingsIcon from '@mui/icons-material/Settings';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {Route,Routes, useNavigate} from "react-router-dom"

=======
import {Route,Routes, useNavigate} from "react-router-dom"
>>>>>>> 6079c2cb7002138c119d8470cc0bbc1d330a01eb

export default function Sidebar() {
  const navigate = useNavigate();

  const navigateToUsers = () => {
    navigate('/users');
  };

  const navigateToApplications = () => {
<<<<<<< HEAD
    navigate('/newApplication');
=======
    navigate('/applications');
>>>>>>> 6079c2cb7002138c119d8470cc0bbc1d330a01eb
  };

  const navigateToUniversities = () => {
    navigate('/universities');
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
        <div className="sidebar-logo">
          <span className="logo">teduco</span>
          </div>
         
         <div className="sidebarMenu">

          <ul className="sidebarList">
<<<<<<< HEAD

            <li onClick={navigateToHome} className="sidebarListItem"> 
            <span class="sidebarIcon"> <HomeIcon /> </span>
=======
            
            <li onClick={navigateToHome} className="sidebarListItem"> 
            <span class="sidebarIcon"><HomeIcon /> </span>  
>>>>>>> 6079c2cb7002138c119d8470cc0bbc1d330a01eb
            Home
            </li>

            <li onClick={navigateToApplications} className="sidebarListItem"> 
            <span class="sidebarIcon"><ArticleIcon />  </span>  
            Applications
            </li>

<<<<<<< HEAD
            <li  className="sidebarListItem"> 
            <span class="sidebarIcon"><CalendarMonthIcon/>  </span>  
            Calender
            </li>


            <li className="sidebarListItem"> 
            <span class="sidebarIcon"><SettingsIcon />   </span>  
            Settings
            </li>


=======
>>>>>>> 6079c2cb7002138c119d8470cc0bbc1d330a01eb
            <li onClick={navigateToUniversities} className="sidebarListItem"> 
            <span class="sidebarIcon"><SchoolIcon />  </span>  
            Universities
            </li>

          </ul>


             </div>
          </div>
        </div>
  )
}
