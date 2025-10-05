import React from 'react';
import Expenditure from './Expenditure';
import Investment from './Investment';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'expenditure' ? 'active' : ''}`}
            onClick={() => setActiveTab('expenditure')}
          >
            Expenditure
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'investment' ? 'active' : ''}`}
            onClick={() => setActiveTab('investment')}
          >
            Investment
          </button>
        </li>
      </ul>

      <div className="tab-content mt-4">
        {activeTab === 'expenditure' && <Expenditure />}
        {activeTab === 'investment' && <Investment />}
      </div>
    </>
  );
};

export default Tabs;