import React from 'react';

import Provider from './components/Provider';
import InputFilter from './components/InputFilter';
import Table from './components/Table';
import './styles/App.css';

function App() {
  return (
    <Provider>
      <InputFilter />
      <Table />
    </Provider>
  );
}

export default App;
