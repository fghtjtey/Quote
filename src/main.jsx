import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MainContaxt } from './context/index.js'
import './index.css'
// import MainContaxt from './MainContaxt';

createRoot(document.getElementById('root')).render(
    <MainContaxt>
        <App />
    </MainContaxt>
        
)
