import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pay from './pages/Pay'
import Confirm from './pages/Confirm'
import Details from './pages/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    
    <Router>
        <Routes>
          <Route path='/willnotopen' element={<Home/>} />
          <Route path='/pay' element={<Pay/>} />
          <Route path='/confirm' element={<Confirm/>} />
          <Route path='/details' element={<Details/>} />
        </Routes>
    </Router>
  </>
  )
}

export default App
