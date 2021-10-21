import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const PAGE_LIMIT = 15;

export default function useFetchPokemon<T>(name?: string) {
  const URL = name ? `${API_URL}/${name}` : `${API_URL}?limit=${PAGE_LIMIT}`;
  const { data, error } = useSWR<T>(URL, fetcher);

  return { data, error };
}
