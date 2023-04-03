import { useMemo } from "react";
// Hooks
import { useFilterPokemons } from "../../../Hooks";
// Components
import { ListBox, PokemonMiniCard } from "./components";
// Interfaces
import { PokemonData } from "../../../Types";

type SearchSectionProps = {
  toSearch: string;
  selectedType: string;
  setSelectedType: (newValue: string) => void;
  setSelectedPokemon: (newValue: string) => void;
}

const PokemonList = ({
  filteredPokemons,
  setSelectedPokemon,
}: {
  filteredPokemons: PokemonData[];
  setSelectedPokemon: (newValue: string) => void;
}): JSX.Element => {
  const memoizedPokemonMiniCards = useMemo(
    () =>
      filteredPokemons.map((pokemon) => (
        <PokemonMiniCard
          key={pokemon.name}
          sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.url.match(/\/(\d+)\//)?.[1]
          }.png`}
          name={pokemon.name}
          setSelectedPokemon={setSelectedPokemon}
        />
      )),
    [filteredPokemons, setSelectedPokemon]
  );

  return (
    <div className="flex flex-col gap-4 overflow-auto h-Cust1">
      {memoizedPokemonMiniCards}
    </div>
  );
};

const SearchSection = ({
  toSearch,
  selectedType,
  setSelectedType,
  setSelectedPokemon,
}: SearchSectionProps) => {
  const { filteredPokemons } = useFilterPokemons(toSearch, selectedType);

  return (
    <>
      {/* Pokémon type list */}
      <ListBox selectedType={selectedType} setSelectedType={setSelectedType} />
      {/* Pokémon  filtered list*/}
      <PokemonList
        filteredPokemons={filteredPokemons}
        setSelectedPokemon={setSelectedPokemon}
      />
    </>
  );
};

export default SearchSection;
