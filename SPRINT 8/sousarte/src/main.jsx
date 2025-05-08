import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { sousarteApp } from './sousarteApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <sousarteApp/>
  </StrictMode>,
)
