import { Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import Landing from './pages/landing/Landing'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Pricing from './pages/Pricing/Pricing';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Landing/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='price' element={<Pricing/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
