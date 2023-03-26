import { useEffect, useState } from 'react';
import axios from "axios";

interface Pokemon {
  name: string;
  url: string;
}

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

const useAllPokemon = () => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [pokemonsToFilter, setPokemonsToFilter] = useState<Pokemon[]>([]);


  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
      const results = response.data.results;
      const pokemonDetails = await Promise.all(
        results.map(async (result: any) => {
          const details = await axios.get(result.url);
          return { name: details.data.name, types: details.data.types.map((type: PokemonType) => type.type.name) };
        })
      );
      setAllPokemons(pokemonDetails);
      setPokemonsToFilter(pokemonDetails);
    };
    fetchPokemons();
  }, []);
  return [ allPokemons, pokemonsToFilter ]
}

export default useAllPokemon