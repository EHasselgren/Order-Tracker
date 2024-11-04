import React from 'react';
import Layout from './components/Layout';
import OrderList from './components/OrderList';
import 'leaflet/dist/leaflet.css';


const App: React.FC = () => {
  return (
    <Layout>
      <OrderList />
    </Layout>
  );
};

export default App;