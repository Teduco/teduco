import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import {Route,Routes, useNavigate} from "react-router-dom"

export default function Sidebar() {
  const navigate = useNavigate();

  const navigateToUsers = () => {
    navigate('/users');
  };

  const navigateToApplications = () => {
    navigate('/applications');
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
         <div className="sidebarMenu">
          <ul className="sidebarList">
            
            <li onClick={navigateToHome} className="sidebarListItem"> 
            <span class="sidebarIcon"><HomeIcon /> </span>  
            Home
            </li>

            <li onClick={navigateToApplications} className="sidebarListItem"> 
            <span class="sidebarIcon"><ArticleIcon />  </span>  
            Applications
            </li>

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
