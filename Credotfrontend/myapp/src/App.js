
import './App.css';
import Shoes from './Components/Shoes';
import Bagpack from './Components/Bagpack';
import Watch from './Components/Watch';
import Playstation from './Components/Playstation';
import Navbarr from './Components/Navbarr';
import Items from './Components/Items';
import Formm from './Components/Formm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartBag from './Components/CartBag';
import CartView from './Components/CommonCart';
import Cartshoe from './Components/CartShoe';
import CartWatch from './Components/CartWatch';
import Navbar2 from './Components/NacBar2';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>

        <Route path='/' element={<>

          <Navbarr/>
      <Playstation/>
      <Items/>
      <Formm/>
      <Shoes/>
      <Bagpack/>
      <Watch/>
        
        
        
        </>}/>
        <Route path='/bag' element={<><Navbar2/><Bagpack/></>}/>
        <Route path='/watch' element={<><Navbar2/><Watch/></>}/>
        <Route path='/shoe' element={<><Navbar2/><Shoes/></>}/>


        <Route path='/cartbag/:_id' element={<><CartBag/></>}/>
        <Route path='/commoncart' element={<><CartView/></>}/>
 
        <Route path='/cartshoe/:_id' element={<><Cartshoe/></>}/>
        <Route path='/cartwatch/:_id' element={<><CartWatch/></>}/>



      </Routes>
      
      
      
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
