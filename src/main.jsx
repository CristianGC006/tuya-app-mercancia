import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelDeControl from './pages/PanelDeControl'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './pages/auth/login'
let router = createBrowserRouter([
  {
    path:'/',
    element: <Login />
  },
  {
    path:'/panel',
    element: <PanelDeControl />
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
