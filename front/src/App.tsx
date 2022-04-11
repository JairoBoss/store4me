import { useContext, useEffect, useState } from 'react';
import './App.css';
import { AuthContext, IAuthContext } from './context/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/public/login';
import { FullPageLoading } from './components/FullPageLoading';
import Admin from './components/admin'

function App() {
  const { currentUser, checkUser } = useContext(AuthContext) as IAuthContext;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);
  const publicRoutes = (
    <Routes>
      <Route path="/" element={<Admin />} />
    </Routes>
  );

  const userRoutes = (
    <Routes>
      <Route path="/" element={<><h1>user</h1></>} />
    </Routes>
  );

  const adminRoutes = (
    <Routes>
      <Route path="/ayuda" element={<Admin/>} />
    </Routes>
  );

  const getRoute = () => {
    console.log(currentUser)
    if (loading) {
      return (
        <Routes>
          <Route path="/" element={<FullPageLoading />} />
        </Routes>
      );
    }

    if (!currentUser) return publicRoutes;

    if (currentUser) {
      return adminRoutes;
    } else {
      return userRoutes;
    }
  };
  return (
    <>
    <BrowserRouter>{getRoute()}</BrowserRouter>
    </>

  );
}

export default App;
