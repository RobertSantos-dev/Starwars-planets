import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function ListFilter() {
  const {
    filterByNumericValues: { filterValue, setFilterValue },
    selectColumn: { columns, setColumns },
  } = useContext(AppContext);

  const buttonDelete = ({ target: { parentElement } }) => {
    const { firstElementChild: { firstElementChild } } = parentElement;

    const newList = columns.filter((e) => e !== firstElementChild.innerHTML);
    const newValue = filterValue.filter((e) => e.column !== firstElementChild.innerHTML);
    setColumns([...newList, firstElementChild.innerHTML]);
    setFilterValue(newValue);
  };

  return (
    <section>
      <ul>
        { filterValue ? filterValue.map((e, i) => (
          <li key={ i }>
            <div>
              <span>{e.column}</span>
              {' | '}
              <span>{e.comparison}</span>
              {' | '}
              <span>{e.value}</span>
            </div>
            <button
              type="button"
              onClick={ buttonDelete }
            >
              Excluir
            </button>
          </li>
        )) : '' }
      </ul>
    </section>
  );
}

export default ListFilter;
