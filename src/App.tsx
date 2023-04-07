import { useState, useEffect } from "react";
import "./Styles/index.css";
// Hooks
import useFilterPokemons from "./Hooks/Custom/useFilterPokemons";
// Components
import {
  Header,
  Search,
  SeachSection,
  PokemonCard,
  PokemonCarousel,
} from "./Pages/components";

const App = (): JSX.Element => {
  const [toSearch, setToSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [counter, setCounter] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const { filteredPokemons } = useFilterPokemons(toSearch, selectedType);

  useEffect(() => {
    if (filteredPokemons) {
      setCounter(filteredPokemons.length);
    }
  }, [filteredPokemons]);

  return (
    <div className="App">
      <Header />
      <main className="w-full min-h-full flex gap-3 p-12">
        <article className="min-w-80 flex flex-col gap-3">
          <Search counter={counter} setToSearch={setToSearch} />
          <SeachSection
            toSearch={toSearch}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            setSelectedPokemon={setSelectedPokemon}
          />
        </article>

        <article className="w-full h-20">
          {selectedPokemon !== "" ? (
            <>
              <PokemonCard selectedPokemon={selectedPokemon} />
              <PokemonCarousel selectedPokemon={selectedPokemon} />
            </>
          ) : (
            <></>
          )}
        </article>
      </main>
    </div>
  );
};

export default App;
