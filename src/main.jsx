import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PrepSetuContextProvider from './store/PrepSetuContext.jsx'

createRoot(document.getElementById('root')).render(
  <PrepSetuContextProvider>
    <App />
  </PrepSetuContextProvider>,
)
