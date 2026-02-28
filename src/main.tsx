import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

// Note: StrictMode removed intentionally — it double-mounts components in dev,
// which causes motion/framer-motion animations to play twice.
ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
