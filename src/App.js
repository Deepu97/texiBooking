
import './App.css';
import About from './book/About';
import Backg from './book/Backg';
import Benefit from './book/Benefit';
import Contect from './book/Contect';
import Gallery from './book/Gallery';
import Imge from './book/Imge';

import Navbar from './book/Navbar';
import Ourservice from './book/Ourservice';
import Taxi from './book/Taxi';
import {Routes,Route} from 'react-router-dom';


function App() {
  return (
   <>

<Routes>
  <Route exact path="/" element={<><Taxi/><Backg/><Ourservice/><Gallery/><Benefit/><Navbar/></>}></Route>

  <Route path="/service" element={<><Taxi/><Imge/><Ourservice/><Benefit/><Navbar/></>}></Route>
  <Route path="/contact" element={<><Taxi/><Contect/><Navbar/></>}></Route>
  <Route path="/about" element={<><Taxi/><About/><Benefit/><Navbar/></>}></Route>
  
 </Routes>
  
   </>
      );
}

export default App;
