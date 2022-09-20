import React from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import useFetch from '../hooks/useFetch';

function Provider({ children }) {
  const api = useFetch();

  return (
    <AppContext.Provider value={ api }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
