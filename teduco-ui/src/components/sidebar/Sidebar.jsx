import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
         <div className="sidebarMenu">
          <ul className="sidebarList">

            <li className="sidebarListItem"> 
            <span class="sidebarIcon"><HomeIcon /> </span>  
            Home
            </li>

            <li className="sidebarListItem"> 
            <span class="sidebarIcon"><ArticleIcon />  </span>  
            Applications
            </li>

            <li className="sidebarListItem"> 
            <span class="sidebarIcon"><SchoolIcon />  </span>  
            Universities
            </li>

          </ul>


             </div>
          </div>
        </div>
  )
}
