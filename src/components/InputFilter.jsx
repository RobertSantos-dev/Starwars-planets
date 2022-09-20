import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function InputFilter() {
  const { setName, filterByName: { name } } = useContext(AppContext);

  return (
    <section>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
      />
    </section>
  );
}

export default InputFilter;
