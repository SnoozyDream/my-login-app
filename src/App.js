import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/*＜====ちゃんと"/"に当たるページを指定してあげる*/}
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<RegisterPage />} />
    
    </Routes>
    </BrowserRouter>
  );
  
}

export default App;
