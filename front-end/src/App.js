import { Routes ,Route,BrowserRouter } from 'react-router-dom';
import LoginPage  from './components/pages/LoginPage';
import MainPage  from './components/Layout/MainPage';
import PrivateRoute from './components/Common/PrivateRoute';
import  NotFound  from './components/Common/NotFound';
import Locations from './components/locations/Locations';
import Users from './components/users/Users';
import ResetPassword from './components/pages/ResetPassword';
import ForgotPassword from './components/pages/ForgotPassword';
import Register from './components/pages/Register';
import MyAccount from './components/myAccount/MyAccount';
function App() {
  
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/resetpassword/:id' element={<ResetPassword/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Register/>}/>
            
       
        <Route path='/' element={<PrivateRoute><Locations/></PrivateRoute>}/>
          
        <Route path='/locations' element={<PrivateRoute><Locations/></PrivateRoute>}/>
          
        <Route path='/users' element={<PrivateRoute><Users/></PrivateRoute>}/>
        <Route path='/myaccount' element={<PrivateRoute><MyAccount/></PrivateRoute>}/>
          
       
        <Route path='*' element={<NotFound/>}>
            
        </Route>
      </Routes>
 
      </BrowserRouter>
  );
}

export default App;
