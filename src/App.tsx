// Import
import { useState, useEffect } from "react";

// Custom Hooks
import useFilterPokemons from "./Hooks/Custom/useFilterPokemons";

import "./Styles/index.css";
// Components
import { Header, Search } from "./Pages/components";
import { SeachSection } from "./Pages/components/SeachSection";

const App = (): JSX.Element => {
  const [toSearch, setToSearch] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [counter, setCounter] = useState<number>(0);
  const { filteredPokemons } = useFilterPokemons(toSearch, selectedType);

  useEffect(() => {
    setCounter(filteredPokemons.length);
  });

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
          />
        </article>

        <article className="w-full h-20">
          <h1>Selected Pokemon</h1>
        </article>
      </main>
    </div>
  );
};

export default App;
