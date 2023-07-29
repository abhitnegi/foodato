import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Genre from './helper/Genre';

function App() {
  return (
    <>
    <Router basename='/foodato'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/show/:type' element={<Genre />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;