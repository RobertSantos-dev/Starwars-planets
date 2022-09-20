import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const titleHeader = [
  'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
  'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL',
];

function Table() {
  const api = useContext(AppContext);
  const apiFilms = (arr) => arr.map((e, i) => <p key={ i }>{ e }</p>);

  return (
    <table>
      <thead>
        <tr>{ titleHeader.map((e, i) => <th key={ i }>{ e }</th>) }</tr>
      </thead>
      <tbody>
        { api.map((e, i) => (
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
