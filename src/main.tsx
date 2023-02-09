import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const queryclient= new QueryClient(
  //options
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
    <App />

    </QueryClientProvider>
  </React.StrictMode>,
)
