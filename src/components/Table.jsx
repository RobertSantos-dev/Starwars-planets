import React, { useContext, useEffect } from 'react';

import AppContext from '../context/AppContext';
import { listUpdate, titleHeader } from '../services/functionTable';

function Table() {
  const {
    filterByName: { name }, filterByNumericValues: { filterValue },
    requestApi: { listApi, setListApi }, api,
    selectColumn: { columns },
  } = useContext(AppContext);

  useEffect(() => {
    listUpdate(setListApi, filterValue, api);
  }, [filterValue, columns]);

  const apiFilms = (arr) => arr.map((e, i) => <p key={ i }>{ e }</p>);
  const list = listApi.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));

  return (
    <table>
      <thead>
        <tr>{ titleHeader.map((e, i) => <th key={ i }>{ e }</th>) }</tr>
      </thead>
      <tbody>
        { list.map((e, i) => (
          <tr key={ i }>
            <td>{ e.name }</td>
            <td>{ e.rotation_period }</td>
            <td>{ e.orbital_period }</td>
            <td>{ e.diameter }</td>
            <td>{ e.climate }</td>
            <td>{ e.gravity }</td>
            <td>{ e.terrain }</td>
            <td>{ e.surface_water }</td>
            <td>{ e.population }</td>
            <td>{ apiFilms(e.films) }</td>
            <td>{ e.created }</td>
            <td>{ e.edited }</td>
            <td>{ e.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
