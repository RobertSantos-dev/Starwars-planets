import React, { useState, useContext } from 'react';

import AppContext from '../context/AppContext';

const options = [
  ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  ['maior que', 'menor que', 'igual a'],
];

function FilterSearch() {
  const { filterByNumericValues: { setFilterValue } } = useContext(AppContext);
  const [optionsState, setOptionsState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const setStateGeneric = ({ target: { name, value } }) => {
    setOptionsState((state) => ({ ...state, [name]: value }));
  };

  const handleClick = () => {
    setFilterValue((state) => ([...state, optionsState]));
    setOptionsState({ column: 'population', comparison: 'maior que', value: '0' });
  };

  return (
    <section>
      <div>
        <label htmlFor="columnId">
          Coluna:
          <select
            id="columnId"
            data-testid="column-filter"
            name="column"
            value={ optionsState.column }
            onChange={ setStateGeneric }
          >
            { options[0].map((e, i) => <option key={ i } value={ e }>{ e }</option>) }
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="comparisonId">
          Operador:
          <select
            id="comparisonId"
            data-testid="comparison-filter"
            name="comparison"
            value={ optionsState.comparison }
            onChange={ setStateGeneric }
          >
            { options[1].map((e, i) => <option key={ i } value={ e }>{ e }</option>) }
          </select>
        </label>
      </div>
      <div>
        <input
          type="number"
          name="value"
          data-testid="value-filter"
          value={ optionsState.value }
          onChange={ setStateGeneric }
        />
      </div>
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>
    </section>
  );
}

export default FilterSearch;
