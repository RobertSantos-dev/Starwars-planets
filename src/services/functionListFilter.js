export const btnDelete = (
  { parentElement },
  { setColumns, setFilterValue, setListApi, api, columns, filterNum },
) => {
  const { firstElementChild } = parentElement;

  const newList = columns.filter((e) => e !== firstElementChild.innerHTML);
  setColumns([...newList, firstElementChild.innerHTML]);
  setFilterValue((state) => {
    const newValue = state.filter((e) => e.column !== firstElementChild.innerHTML);
    setListApi(filterNum(api, newValue));
    return newValue;
  });
};

export const btnClear = ({ setFilterValue, setColumns, opColumns }) => {
  setFilterValue([]);
  setColumns(opColumns);
};
