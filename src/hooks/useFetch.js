import { useEffect, useState } from 'react';

export default function useFetch() {
  const [api, setApi] = useState([]);
  const [listApi, setListApi] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const requestApi = await fetch('https://swapi.dev/api/planets');
      const responseApi = await requestApi.json();
      responseApi.results.forEach((e) => delete e.residents);

      setApi(responseApi.results);
      setListApi(responseApi.results);
    };

    fetchApi();
  }, []);

  return { api, listApi, setListApi };
}
