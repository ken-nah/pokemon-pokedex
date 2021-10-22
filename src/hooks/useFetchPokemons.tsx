import useSWR from 'swr';

type URLConfig = {
  name?: string;
  page?: number;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const apiURL = (config: URLConfig) => {
  const PAGE_LIMIT = 12;
  const URL = 'https://pokeapi.co/api/v2/pokemon';
  const { name, page = 1 } = config;

  if (name) return `${URL}/${name}`;
  return `${URL}?offset=${(page - 1) * PAGE_LIMIT}&limit=${PAGE_LIMIT}`;
};

export default function useFetchPokemon<T>(config: URLConfig = {}) {
  const { data, error } = useSWR<T>(apiURL(config), fetcher);
  return { data, error };
}
