import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Login />} />
        <Route path="posts" element={<Login />} />
        <Route path="users" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
