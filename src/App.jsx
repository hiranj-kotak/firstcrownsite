import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Home from './Pages/Home/Home'
import './App.css'
import SmoothFollower from './Components/Cursor/Cursor'
function App() {
  return (
    <BrowserRouter>
      <SmoothFollower />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
