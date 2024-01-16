import './App.css';
import NavbarContainer from './components/navbar/NavbarContainer';
import { Routes, Route } from 'react-router-dom';
import Home from './router/home/Home'
import Login from './router/login/Login'
import Wishes from './router/wishes/Wishes'
import Cart from './router/cart/Cart'
import { PRODUCTS } from './static';
import SingleRoute from './router/single-route/SingleRoute';


function App() {
  return (
    <div className="App">

      <NavbarContainer />
      <Routes>
        <Route path='/' element={<Home data={PRODUCTS} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wishes' element={<Wishes />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<SingleRoute />} />
      </Routes>


    </div>
  );
}

export default App;
