export const titleHeader = [
  'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
  'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL',
];

export const filterNum = (arrApi, arr) => {
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
    console.log(list);
  });
  return list;
};

export const listUpdate = (setListApi, filterValue, api) => {
  if (filterValue.length > 0) {
    setListApi((state) => filterNum(state, filterValue));
  } else { setListApi(api); }
};
