import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import './App.css';
import data from './sample-data.json';

function App() {
  const employees = data.employees;
  const companyInfo = data.companyInfo;
  console.log('test', data)

  return (
    <div className="App">
      <Header date={companyInfo.companyEst} title={companyInfo.companyName} motto={companyInfo.companyMotto} />
      <h2 className="subtitle">Our Employees <Search data={employees} sortBy={() => { }} /></h2>
    </div>
  );
}

export default App;
