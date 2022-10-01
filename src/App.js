import './App.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import CreateQRCode from './pages/create-qrcode';
import QrcodeHistory from './pages/qrcode-history';
import MyProfile from './pages/my-profile';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className='App'>
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/dashboard/user/create-qrcode' element={<CreateQRCode/>} />
            <Route path='/dashboard/user/qrcode-history' element={<QrcodeHistory/>} />
            <Route path='/dashboard/user/my-profile' element={<MyProfile/>} />
        </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
