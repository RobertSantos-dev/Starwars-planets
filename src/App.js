import React from 'react';

import Provider from './context/Provider';
import InputFilter from './components/InputFilter';
import FilterSearch from './components/FilterSearch';
import ListFilter from './components/ListFilter';
import Table from './components/Table';
import './styles/App.css';

function App() {
  return (
    <Provider>
      <InputFilter />
      <hr />
      <FilterSearch />
      <hr />
      <ListFilter />
      <hr />
      <Table />
    </Provider>
  );
}

export default App;
