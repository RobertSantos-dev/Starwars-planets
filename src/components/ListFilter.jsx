import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

import { opColumns } from '../services/functionFilter';
import { filterNum } from '../services/functionTable';

function ListFilter() {
  const {
    filterByNumericValues: { filterValue, setFilterValue },
    selectColumn: { columns, setColumns },
    requestApi: { setListApi },
    api,
  } = useContext(AppContext);

  const buttonDelete = ({ target: { parentElement } }) => {
    const { firstElementChild } = parentElement;

    const newList = columns.filter((e) => e !== firstElementChild.innerHTML);
    setColumns([...newList, firstElementChild.innerHTML]);
    setFilterValue((state) => {
      const newValue = state.filter((e) => e.column !== firstElementChild.innerHTML);
      setListApi(filterNum(api, newValue));
      return newValue;
    });
  };

  const buttonClear = () => {
    setFilterValue([]);
    setColumns(opColumns);
  };

  return (
    <section>
      <div>
        <ul>
          { filterValue ? filterValue.map((e, i) => (
            <li key={ i } data-testid="filter">
              <span>{e.column}</span>
              {' | '}
              <span>{e.comparison}</span>
              {' | '}
              <span>{e.value}</span>
              <button
                type="button"
                onClick={ buttonDelete }
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
            onClick={ buttonClear }
            data-testid="button-remove-filters"
          >
            Resetar filtros
          </button>
        )}
    </section>
  );
}

export default ListFilter;
