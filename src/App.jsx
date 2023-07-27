import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'

import Header from './components/Shared/Header/Header'
import Home from './components/Home/Home/Home';
import NotFound from './components/Shared/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  

  return (
    <div className="max-w-7xl mx-auto px-5">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='home' element={<Home></Home>} ></Route>
      <Route path='*' element={<NotFound></NotFound>} ></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='dashboard' element={<Dashboard></Dashboard>}></Route>
      
      </Routes>
      
    </div>
  )
}

export default App
