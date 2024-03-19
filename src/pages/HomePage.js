import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import  toast  from 'react-hot-toast';
//import SalesChart from './SalesChart';
//import CustomerChart from './CustomerChart';
import './HomePage.css'
import MovingScroll from './banner/MovingScroll';

const HomePage = () => {
  
 /* const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", lastInteraction: "2024-03-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210", lastInteraction: "2024-03-14" },
    { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "456-789-0123", lastInteraction: "2024-03-13" },
  ]);*/

  const updates = [
    'New investment opportunity available!',
    'Stock market update: S&P 500 hits all-time high.',
    'Cryptocurrency prices surge.',
    'Real estate market trends for 2024.'
  ];


  return (
    <Layout>
      <div className="home">
      <MovingScroll updates={updates}/>
      {/*<CustomerChart customers={customers} />*/}
      </div>
        
    </Layout>
  );
};

export default HomePage;
