import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Styles from './styles/globalStyles.js'
//import das rotas:
import Router from './routes/routes.jsx'
import {BrowserRouter} from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <Styles />
  </StrictMode>,
)
