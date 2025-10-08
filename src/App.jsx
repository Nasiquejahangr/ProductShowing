import { useState } from 'react';
import './App.css'
import Navbar from './componenet/Navbar'
import Product from './componenet/Product'

function App() {
  const [category, setCategory] = useState('all');

  return (
    <>
      <Navbar setCategory={setCategory} />
      <Product category={category} />
    </>
  )
}

export default App
