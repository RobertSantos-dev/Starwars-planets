import React from 'react';

import Provider from './components/Provider';
import Table from './components/Table';
import './styles/App.css';

function App() {
  return (
    <Provider>
      <span>Hello, App!</span>
      <Table />
    </Provider>
  );
}

export default App;
