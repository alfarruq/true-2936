
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Advantages from './pages/Advantages'
import Brand from './pages/Brand'
import Contact from './pages/Contact'
import Home from './pages/Home'
import OpenClub from './pages/OpenClub'

function App() {

  return (
    <>
      <Header />

      <main className='container' >

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/advantages' element={<Advantages />} />
          <Route path='/openclub' element={<OpenClub />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>




      </main>

      <Footer />
    </>
  )
}

export default App
