import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelDeControl from './pages/PanelDeControl'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelDeControl />
  </StrictMode>,
)
