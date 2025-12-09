import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorder from './pages/Place Order/Placeorder'
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

const App = () => {

  const [Showlogin,setShowlogin] = useState(false)

  return (
    <>
    {Showlogin?<Login setShowlogin={setShowlogin} />: <></>}
    <div className='app'>
      <Navbar setShowlogin={setShowlogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />
      </Routes>
    </div>
    <Footer />
    </>
    
  );
}

export default App;
