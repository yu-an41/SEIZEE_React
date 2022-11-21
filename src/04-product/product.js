import './App.css'

import ProductCard from './pages/Product/components/ProductCard'
import ProductList from './pages/Product/ProductList'
import ProductDescripton from './pages/Product/components/ProductDescripton'
import HeadWave from '../components/HeadWave'
import YellowWave2 from './pages/Product/components/YellowWave2'

function App() {
  return (
    <>
      <HeadWave />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      
      <ProductDescripton />
      <YellowWave2 />
      <ProductList />
    </>
  )
}

export default App
