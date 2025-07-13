import Lecture from "./Lecture";
import Input from "./Input";

import {BrowserRouter , Routes , Route  } from 'react-router-dom'
import Signin from "./SignIn";
import { Aurora } from "./aurora";

function App() {
  return (
    <>

     <BrowserRouter>

     <Routes>
      <Route path="/signIn" element={<Signin></Signin>}></Route>
      <Route path="/videoLect" element={<Lecture/>}></Route>
      <Route path="/" element={<Aurora><Input/></Aurora>}></Route>
     </Routes>
     
     
     </BrowserRouter> 

     


   
    </>
  );
}

export default App;
