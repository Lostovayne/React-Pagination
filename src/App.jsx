import { useState } from 'react'
import ProductList from './components/ProductList'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1 className='title'>Deus lo Vult Store</h1>
      <ProductList />
    </div>
  )
}

export default App
