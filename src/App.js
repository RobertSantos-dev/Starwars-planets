import React from 'react';

import Provider from './components/Provider';
import FilterSearch from './components/FilterSearch';
import InputFilter from './components/InputFilter';
import Table from './components/Table';
import './styles/App.css';

function App() {
  return (
    <Provider>
      <InputFilter />
      <hr />
      <FilterSearch />
      <hr />
      <Table />
    </Provider>
  );
}

export default App;
