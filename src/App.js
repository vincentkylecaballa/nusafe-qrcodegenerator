import './App.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className='App'>
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
