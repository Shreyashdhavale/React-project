import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './LoginPage.jsx'
import RegistrationPage from './RegistrationPage.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/register' element={<RegistrationPage/>}/>
  </Routes>
  </BrowserRouter>
)
