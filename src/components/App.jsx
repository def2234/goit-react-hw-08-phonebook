import { Route, Routes } from 'react-router-dom';
// import { FormContacts } from './FormContacts/FormContacts.js';

// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
import { Navigation } from './navigation/Navigation.js';
// import { Home } from 'page/HomePage.js';
import RegisterPage from 'page/RegisterPage.js';
import LoginPage from 'page/LoginPage.js';





export function App() {

  return (
    <Routes>
    <Route path="/" element={<Navigation />}>
      {/* <Route index element={<Home />} /> */}
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      
    </Route>
  </Routes>
   
  );
}

export default App;


 
