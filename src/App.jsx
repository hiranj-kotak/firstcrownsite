import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav'
import Home from './Pages/Home/Home'
import './App.css'
import SmoothFollower from './Components/Cursor/Cursor'
import Carrers from './Pages/careers/Careers'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <SmoothFollower />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Carrers />} />
      </Routes>
      < Footer/>
    </BrowserRouter>
  )
}

export default App
