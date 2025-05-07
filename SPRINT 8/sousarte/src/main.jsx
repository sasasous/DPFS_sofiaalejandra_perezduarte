import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { sousarteApp } from './sousarteApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <sousarteApp/>
  </StrictMode>,
)
