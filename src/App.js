import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import CustomerList from './pages/CustomerList';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import Team from './pages/team/Team';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/customer" element={<CustomerList />} />

        <Route path="/team" element={<Team/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
