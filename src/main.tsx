import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

const redirectedPath = new URLSearchParams(window.location.search).get('p')
if (redirectedPath?.startsWith('/')) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  window.history.replaceState(null, '', `${base}${redirectedPath}`)
}

createRoot(document.getElementById('root')!).render(<StrictMode><BrowserRouter basename={import.meta.env.BASE_URL}><App /></BrowserRouter></StrictMode>)
