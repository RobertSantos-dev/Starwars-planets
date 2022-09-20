import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const titleHeader = [
  'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
  'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL',
];

function Table() {
  const {
    api, filterByName: { name }, filterByNumericValues: { filterValue },
  } = useContext(AppContext);

  const filterNum = (arrApi, arr) => {
    let list = [];
    arr.forEach((e) => {
      const op = [
        e.comparison === 'maior que',
        e.comparison === 'menor que',
        e.comparison === 'igual a',
      ];
      const i = op.findIndex((value) => value === true);

      list = arrApi.filter((e2) => {
        const res = [
          Number(e2[e.column]) > Number(e.value),
          Number(e2[e.column]) < Number(e.value),
          Number(e2[e.column]) === Number(e.value),
        ];
        return res[i];
      });
    });
    return list;
  };

  const apiFilms = (arr) => arr.map((e, i) => <p key={ i }>{ e }</p>);
  const list = filterValue.length > 0 ? filterNum(api, filterValue) : api;
  const listSeach = list.filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));

  return (
    <table>
      <thead>
        <tr>{ titleHeader.map((e, i) => <th key={ i }>{ e }</th>) }</tr>
      </thead>
      <tbody>
        { listSeach.map((e, i) => (
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
