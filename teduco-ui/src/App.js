import Home from "/Users/inanccan/teduco/teduco-ui/src/pages/home/home/Home.jsx"
import "./app.css"
import {Route,Routes} from "react-router-dom"
import UserList from "./pages/home/userList/UserList";
import Topbar from "/Users/inanccan/teduco/teduco-ui/src/components/topbar/Topbar.jsx"
import Sidebar from "/Users/inanccan/teduco/teduco-ui/src/components/sidebar/Sidebar.jsx"

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<UserList/>} />
      </Routes>
            </div>

          </div>
  );
}

export default App;
