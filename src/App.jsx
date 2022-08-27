import { Route, Routes } from 'react-router-dom'
import SharedLayout from './components/SharedLayout';
import Landing from './pages/landing/Landing'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Landing/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
