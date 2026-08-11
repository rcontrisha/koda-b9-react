import { Route, Routes } from 'react-router'
import CounterPage from './pages/CounterPage'
import ProductPage from './pages/ProductPage'
import PokePage from './pages/PokePage'


function Router() {
  return (
    <Routes>
      <Route path='/' />
      <Route path='/counter' element={<CounterPage />} />
      <Route path='/product' element={<ProductPage />} />
      <Route path='/pokemon' element={<PokePage />} />
    </Routes>
  )
}

export default Router