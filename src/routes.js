import { BrowserRouter, Routes, Route } from 'react-router-dom';


import home from './pages/home';
import sobre from './pages/sobre';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/" element={<home />} />
        
        
        <Route path="/sobre" element={<sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;