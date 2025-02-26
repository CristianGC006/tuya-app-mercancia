import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelDeControl from './PanelDeControl'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelDeControl />
  </StrictMode>,
)
