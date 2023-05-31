import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import ForTest from './components/ForTest';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/forTest" element={<ForTest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
