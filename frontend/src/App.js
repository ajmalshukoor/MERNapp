import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {useAuthContext} from './hooks/useAuthContext'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import ImageGall from './pages/ImageGall';

function App() {
  const {user} = useAuthContext()
  
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <div>
          <Routes>
            <Route path="/:id" element={user ? <ImageGall/>: <Navigate to="/login"/>}/>
            <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
            <Route path="/login" element={!user ? <Login/> : <Navigate to="/"/>}/>
            <Route path="/signup" element={!user ? <Signup/> : <Navigate to="/"/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
