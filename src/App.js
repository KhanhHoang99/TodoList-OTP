
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import TodoList from './Pages/TodoList/TodoList';
import NoPage from './Pages/NoPage/NoPage';
import Layout from './Layouts/Layout';
import OTP from './Components/OTP/OTP';



function App() {
  return (
    <div className="App">
      { 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/todolists" element={<TodoList />} />
              <Route path="/otp" element={<OTP />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      }
      
    </div>
    
  );
}

export default App;
