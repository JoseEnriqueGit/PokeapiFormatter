import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Fuse from "fuse.js";

// https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1281

interface Pokemon {
  url: string;
  name: string;
  types: string[];
}

type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

const options = {
  threshold: 0.2,
  keys: ["name"],
};

const useFilterPokemons = (toSearch: string, selectedType: string) => {
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response: AxiosResponse = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      const results = response.data.results;
      const pokemonDetails = await Promise.all(
        results.map(async (result: { url: string }) => {
          const details = await axios.get(result.url);
          return {
            name: details.data.name,
            url: result.url,
            types: details.data.types.map(
              (type: PokemonType) => type.type.name
            ),
          };
        })
      );
      setAllPokemons(pokemonDetails);
    };
    fetchPokemons();
  }, []);

  useEffect(() => {
    const fuse = new Fuse(allPokemons, options);
    const filteredByName = toSearch
      ? fuse.search(toSearch).map((result) => result.item)
      : allPokemons;
    const filteredByType =
      selectedType !== "All"
        ? filteredByName.filter((pokemon) =>
            pokemon.types.includes(selectedType.toLowerCase())
          )
        : filteredByName;
    setFilteredPokemons(filteredByType);
  }, [toSearch, selectedType, allPokemons]);

  return { filteredPokemons };
};

export default useFilterPokemons;
