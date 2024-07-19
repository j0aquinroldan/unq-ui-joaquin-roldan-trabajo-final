import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import GamePage from './components/pages/GamePage'
import NotFoundPage from './components/pages/NotFoundPage'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='*' element={<NotFoundPage />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
