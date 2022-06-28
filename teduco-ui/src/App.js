import Home from "./pages/home/home/Home.jsx"
import "./app.css"
import {Route,Routes} from "react-router-dom"
import UserList from "./pages/home/userList/UserList";
import Topbar from "./components/topbar/Topbar.jsx"
import Sidebar from "./components/sidebar/Sidebar.jsx"
import NewUser from "./pages/home/newUser/newUser.jsx";
import NewProduct from "./pages/home/newProduct/NewProduct.jsx";
import User from "./pages/home/user/User.jsx";
import Signup from "./pages/home/newApplication/Signup.jsx";


function App() {

  return (
    <div>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/users" element={<UserList/>} />
        <Route path="/newuser" element={<NewUser/>} />
        <Route path="/newproduct" element={<NewProduct/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/newApplication" element={<Signup/>} />
        <Route path="/test" element={<Topbar/>} />

      </Routes>
            </div>

          </div>
  );
}

export default App;
