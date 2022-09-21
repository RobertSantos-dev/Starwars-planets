import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import useFetch from '../hooks/useFetch';

import { opColumns } from '../services/functionFilter';

function Provider({ children }) {
  const { api, listApi, setListApi } = useFetch();
  const [name, setName] = useState('');
  const [filterValue, setFilterValue] = useState([]);
  const [columns, setColumns] = useState(opColumns);

  const value = {
    filterByName: { name, setName },
    filterByNumericValues: { filterValue, setFilterValue },
    requestApi: { listApi, setListApi },
    selectColumn: { columns, setColumns },
    api,
  };

  return (
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
