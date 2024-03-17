import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import { Toaster } from 'react-hot-toast';
import Success from './pages/Success';
import Error from './pages/Error';
import ProtectedRoute from './components/ProtectedRoute';




import Home from './pages/Home';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
<Toaster/>

      <Routes>
        <Route path='/' element={<Home />}/>
      
        <Route path='/success' element={<ProtectedRoute element={<Success/>}/> }/>
 
        <Route path='/*' element={<Error/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
