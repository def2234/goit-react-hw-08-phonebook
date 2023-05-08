import { Route, Routes } from 'react-router-dom';

import { Suspense, lazy, useEffect } from 'react';
import PrivateRoute from './PrivateRoute.js';
import PublicRoute from './PublicRoute.js';

import Slider from './slider/Slider.js';
import HomePage from 'page/HomePage.js';
import { useDispatch, useSelector} from 'react-redux';

import { getCurrentUser } from 'Redux/auth/authOperations.js';
import { getIsRefreshing} from 'Redux/auth/authSelectors.js';



const Navigation = lazy(() => import('./navigation/Navigation.js'))
const RegisterPage = lazy(() => import('page/RegisterPage.js'))
const LoginPage = lazy(() => import('page/LoginPage.js'))
const ContactsPage = lazy(() => import('page/ContactsPage.js'))




export function App() {
const dispatch = useDispatch()
const isRefreshing = useSelector(getIsRefreshing)




useEffect(() => {
  dispatch(getCurrentUser())
}, [dispatch])

  return (
    !isRefreshing && (<Suspense fallback={<Slider />}>
    <Routes>
     
    <Route path="/" element={<Navigation />}>
    <Route index element={<HomePage />} />
      
      <Route path='/register'  element={<PublicRoute  restricted><RegisterPage/></PublicRoute>}/>
      <Route path='/login'  element={<PublicRoute restricted><LoginPage/></PublicRoute>}/>
      
      <Route path='/contacts' element={<PrivateRoute><ContactsPage /></PrivateRoute>}/>
      
      
      
    </Route>
    
  </Routes>
  </Suspense>)
    
  
   
  );
}

export default App;


 
