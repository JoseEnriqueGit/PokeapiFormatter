import { useFilterPokemons } from "../../../Hooks";

// Component
import { ListBox, PokemonCard } from "./components";

interface SelectedType {
  toSearch: string;
  selectedType: string;
  setSelectedType: (newValue: string) => void;
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
          <PokemonCard
            key={pokemon.url}
            sprite={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.url.split("/")[6]
            }.png`}
            name={pokemon.name}
          />
        ))}
      </div>
    </>
  );
};

export default SeachSection;
