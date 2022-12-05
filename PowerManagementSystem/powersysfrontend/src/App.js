import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Userdashboard from './pages/user-routes/Userdashboard'
import Privateroute from './components/Privateroute'
import ProfileInfo from './pages/user-routes/ProfileInfo'
import Billpaid from './pages/user-routes/Billpaid'
import UserProvider from './context/userProvider'
import AddBills from './pages/admin/AddBills'
import Admindashboard from './pages/admin/Admindashboard'
import UserBills from './pages/admin/UserBills'
import EditBill from './pages/admin/EditBill'

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <ToastContainer position="bottom-center" />
                <Routes>
                    {/* <Route path="/" element={<Home />}/> */}
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/user" element={<Privateroute />}>
                        <Route path="dashboard" element={<Userdashboard />} />
                        <Route path="profile-info" element={<ProfileInfo />} />
                        <Route path="billPaid" element={<Billpaid />} />
                    </Route>
                    <Route path="/admin" element={<Privateroute />}>
                        <Route path="dashboard" element={<Admindashboard />} />
                        <Route path="add-bill" element={<AddBills />} />
                        <Route path="user-bills" element={<UserBills />} />
                        <Route path="edit-bill" element={<EditBill />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}

export default App
