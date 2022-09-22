import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import { opColumns } from '../services/functionFilter';
import { filterNum } from '../services/functionTable';
import { btnDelete, btnClear } from '../services/functionListFilter';

function ListFilter() {
  const {
    filterByNumericValues: { filterValue, setFilterValue },
    selectColumn: { columns, setColumns },
    requestApi: { setListApi },
    api,
  } = useContext(AppContext);

  const btnValueDel = { setColumns, setFilterValue, setListApi, api, columns, filterNum };
  const btnValueClean = { setFilterValue, setColumns, opColumns };

  return (
    <section>
      <div>
        <ul>
          { filterValue ? filterValue.map((e, i) => (
            <li key={ i } data-testid="filter">
              <span>{e.column}</span>
              |
              <span>{e.comparison}</span>
              |
              <span>{e.value}</span>
              <button
                type="button"
                onClick={ ({ target }) => btnDelete(target, btnValueDel) }
              >
                Excluir
              </button>
            </li>
          )) : '' }
        </ul>
      </div>
      { filterValue.length > 0
        && (
          <button
            type="button"
            onClick={ () => btnClear(btnValueClean) }
            data-testid="button-remove-filters"
          >
            Resetar filtros
          </button>
        )}
    </section>
  );
}

export default ListFilter;
