// Arrays usados para as tags option
const opColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const opComparison = [
  'maior que',
  'menor que',
  'igual a',
];

// functions de filtros, change e click
const handleGeneric = ({ target: { name, value } }, setOptions) => {
  setOptions((state) => ({ ...state, [name]: value }));
};

const stateColumns = (arr, arrColumns, setColumns) => {
  let listOp = [];
  arr.forEach((e) => { listOp = arrColumns.filter((e2) => e.column !== e2); });
  setColumns(listOp);
};

const handleClick = ({ setFilterValue, setOptions, setColumns, options, columns }) => {
  setFilterValue((state) => {
    const list = [...state, options];
    stateColumns(list, columns, setColumns);
    return list;
  });
  setOptions({ column: columns[0], comparison: opComparison[0], value: '0' });
};

export { opComparison, opColumns, handleClick, handleGeneric };
