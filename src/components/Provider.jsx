import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import useFetch from '../hooks/useFetch';

function Provider({ children }) {
  const [name, setName] = useState('');
  const api = useFetch();

  const value = { setName, filterByName: { name }, api };

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
