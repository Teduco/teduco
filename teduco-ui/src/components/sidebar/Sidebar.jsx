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
            <HomeIcon />
            Universities
            </li>

            <li className="sidebarListItem"> 
            <ArticleIcon />
            Universities
            </li>

            <li className="sidebarListItem"> 
            <SchoolIcon />
            Universities
            </li>

          </ul>


             </div>
          </div>
        </div>
  )
}
