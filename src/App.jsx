
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './pages/Layout/Layout'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'


function App() {


  return (
    <BrowserRouter basename='/Cryptolly/'>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="SignIn" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
