import Home from "./pages/home/home/Home.jsx"
import "./app.css"
import {Route,Routes, useNavigate} from "react-router-dom"
import UserList from "./pages/home/userList/UserList";
import Topbar from "./components/topbar/Topbar.jsx"
import Sidebar from "./components/sidebar/Sidebar.jsx"
import NewUser from "./pages/home/newUser/newUser.jsx";

function App() {
  const navigate = useNavigate();

  const navigateToUsers = () => {
    navigate('/users');
  };

  return (
    <div>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<UserList/>} />
        <Route path="/newuser" element={<NewUser/>} />
      </Routes>
            </div>

          </div>
  );
}

export default App;
