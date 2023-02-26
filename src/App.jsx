import { Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import Landing from './pages/landing/Landing'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Pricing from './pages/Pricing/Pricing';
import Dashboard from './pages/dashboard/Dashboard';
import Product from './pages/Product/Product';

function App() {
  return (
    <>
      <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Landing/>}/>
          <Route path='price' element={<Pricing/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
