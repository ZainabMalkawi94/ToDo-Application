import { Routes,Route} from 'react-router-dom';
import ToDo from './Components/ToDo/To-do';
import List from './Components/List/List';
import Header from './Components/Header/Header';
import {SettingsProvider} from './Context/Setting/settingContext'; 
import Footer  from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/signup';
import LoginProvider from './Context/Auth/authContext';


function App() {
  return (
    <>
    <LoginProvider>

    <SettingsProvider> 
        <Header />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/todo" element={<ToDo/>}/>

          <Route path="/settings" element={<List/>} />
        </Routes>
        <Footer />
    </SettingsProvider>

    </LoginProvider>
   
    
    </>
  );
}

export default App;