import Home from './components/home';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import SignIn from './components/signIn'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
