import React, { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import Tabs from './Tabs';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('expenditure');

  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default App;