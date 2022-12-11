import './styles/styles.min.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';

// ROUTES
import { Routes, Route } from 'react-router-dom'

// COMPONENTS
import Nav from './components/Nav.js'
import Search from './components/Search.js'
import Hero from './components/Hero.js'
import Products from './components/Products.js'
import Kikapu from './components/Kikapu.js'
import Kifaa from './components/Kifaa.js'
import Checkout from './components/Checkout.js'
import Footer from './components/Footer.js'

function App() {

  const [vifaa, setvifaa] = useState([])

  useEffect(()=>{
    Axios('http://localhost:1234/vifaa')
    .then(vifaa=>setvifaa(vifaa.data))
  },[vifaa])

  const storedItems = JSON.parse(localStorage.getItem('ecomm_cart')) || 0
  const noOfCartItems = (storedItems != 0) ? storedItems.length : 0
  const [cartItems, setCartItems] = useState(noOfCartItems)

  const updateCart = (number) => {
    setCartItems(number)
  }

  return (
    <>
      <Nav no={cartItems} />
        <Routes>
          <Route path='/' element={<Home products={vifaa} updateCart={updateCart}/>} />
          <Route path='/kikapu' element={<Kikapu />}></Route>
          <Route path='/kifaa' element={<Kifaa />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
      <Footer />
    </>
  );
}

function Home({ products, updateCart }) {
  const [search, setSearch] = useState('')

  return (
    <>
      <Search setSearch={setSearch}/>
      <Hero />
      <Products products={products} search={search} updateCart={updateCart}/>
    </>
  )
}

export default App;
