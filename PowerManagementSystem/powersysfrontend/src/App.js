import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userdashboard from './pages/user-routes/Userdashboard';
import Privateroute from './components/Privateroute';
import ProfileInfo from './pages/user-routes/ProfileInfo';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer position="bottom-center" />
      <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/user" element={<Privateroute />}>
          <Route path="dashboard" element={<Userdashboard />}/>
          <Route path="profile-info" element={<ProfileInfo />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
