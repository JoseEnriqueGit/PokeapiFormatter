import { useFilterPokemons } from "../../../Hooks";

// Component
import { ListBox, PokemonMiniCard } from "./components";

interface SelectedType {
  toSearch: string;
  selectedType: string;
  setSelectedType: (newValue: string) => void;
  setSelectedPokemon: (newValue: string) => void;
}

const SeachSection = (props: SelectedType) => {
  const { filteredPokemons } = useFilterPokemons(
    props.toSearch,
    props.selectedType
  );

  return (
    <>
      <ListBox
        selectedType={props.selectedType}
        setSelectedType={props.setSelectedType}
      />

      <div className="flex flex-col gap-4 overflow-auto h-Cust1">
        {filteredPokemons.map((pokemon) => (
          <PokemonMiniCard
            key={pokemon.url}
            sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split("/")[6]
            }.png`}
            name={pokemon.name}
            setSelectedPokemon={props.setSelectedPokemon}
          />
        ))}
      </div>
    </>
  );
};

export default SeachSection;
