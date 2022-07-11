  
import './App.css';
import Header from './footer_header/header'
import Footer from './footer_header/footer';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/home';
import Skills from './pages/skills';
import Contect from './pages/contect';
import Projectcontainer from './pages/projectcontainer';
function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projectcontainer/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contect' element={<Contect/>}/>
      </Routes>
 
     </BrowserRouter>
          <Footer/>
    
    </div>
  );
}

export default App;
