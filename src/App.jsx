import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import GamePage from './components/pages/GamePage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/game' element={<GamePage />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
