import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About'
import Footer from './components/footer/Footer';
import Order from './components/menu/Order';
import Cart from './components/cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Give from './components/Order/Give';
import Search from './components/search/Search';
import { useState } from 'react';

function App() {
  const [ newSearch, setNewSearch ] = useState("")
  const getData = data => {
    setNewSearch(data)
  }
  return (
    <>
    <Router basename='/coffee-ecommerce'>
      <Navbar getData={getData}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/menu' element={<Give />} />
        <Route path='/search' element={<Search newSearch={newSearch}/>} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;