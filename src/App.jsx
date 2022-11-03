import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'
import { ToastContainer } from 're'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  )
}
export default App
