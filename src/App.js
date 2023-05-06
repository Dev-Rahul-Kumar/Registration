// import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar"
import FormDetail from "./component/FormDetail"
import Datatable from './component/Datatable';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      {/* <Navbar /> */}
      {/* <FormDetail/> */}
      {/* <Datatable/> */}
      <Router>
        
          <Navbar />
          <Routes>
            <Route exact path='/' element={<FormDetail />} />
            <Route exact path='/register-data' element={<Datatable />} />
           

          </Routes>
        
      </Router>


    </>

  );
}

export default App;
