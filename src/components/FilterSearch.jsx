import React, { useState, useContext } from 'react';

import AppContext from '../context/AppContext';
import {
  handleClick, handleGeneric, opColumns, opComparison,
} from '../services/functionFilter';

function FilterSearch() {
  const { filterByNumericValues: { setFilterValue } } = useContext(AppContext);
  const [columns, setColumns] = useState(opColumns);
  const [options, setOptions] = useState({
    column: columns[0], comparison: opComparison[0], value: '0',
  });

  const render = { setFilterValue, setOptions, setColumns, options, columns };

  return (
    <section>
      <div>
        <label htmlFor="columnId">
          Coluna:
          <select
            id="columnId"
            data-testid="column-filter"
            name="column"
            value={ options.column }
            onChange={ (e) => handleGeneric(e, setOptions) }
          >
            { columns.map((e, i) => <option key={ i } value={ e }>{ e }</option>) }
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
            value={ options.comparison }
            onChange={ (e) => handleGeneric(e, setOptions) }
          >
            { opComparison.map((e, i) => <option key={ i } value={ e }>{ e }</option>) }
          </select>
        </label>
      </div>
      <div>
        <input
          type="number"
          name="value"
          data-testid="value-filter"
          value={ options.value }
          onChange={ (e) => handleGeneric(e, setOptions) }
        />
      </div>
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => handleClick(render) }
        >
          Filtrar
        </button>
      </div>
    </section>
  );
}

export default FilterSearch;
