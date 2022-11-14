import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import RegisterUser from './components/RegisterUser';
import UserList from './components/UserList';
import UserHome from './components/UserHome';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path = "/" element={<Login />}></Route>
        <Route path = "/userList" element={<UserList />}></Route>
        <Route path = "/addUser" element={<RegisterUser />}></Route>
        <Route path = "/login" element={<Login />}></Route>
        <Route path = "/userhome" element={<UserHome />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;




// #configuration
// spring.datasource.url=jdbc:mysql://localhost:3306/electricitymanagementsystem
// spring.datasource.username=root
// spring.datasource.password=
// spring.datasource.driver-class-name =com.mysql.cj.jdbc.Driver
// spring.jpa.hibernate.ddl-auto=update
// spring.jpa.show-sql= true
