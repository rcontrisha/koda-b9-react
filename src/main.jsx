import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import ProductPage from './pages/ProductPage'
// import CounterPage from "./pages/CounterPage.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CounterPage /> */}
    <ProductPage />
  </StrictMode>,
)
