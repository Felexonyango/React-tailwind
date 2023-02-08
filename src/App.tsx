import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Post from './components/post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
     
     <Post/>
      </div>
     
    </div>
  )
}

export default App
