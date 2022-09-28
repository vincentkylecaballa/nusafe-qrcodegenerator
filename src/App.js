import './App.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className='App'>
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
