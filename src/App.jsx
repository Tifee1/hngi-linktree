import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Contact'
import Footer from './Footer'
import Home from './Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App
