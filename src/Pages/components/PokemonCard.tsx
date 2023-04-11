import { useState, useEffect } from "react";
import axios from "axios";
// components
import { PokemonCardLoader } from "./Loader";

interface PokemonCardProps {
  selectedPokemon: string;
}

interface PokemonDataApi {
  name: string;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  abilities: { ability: { name: string } }[];
  height: number;
  weight: number;
}

const PokemonCard = ({ selectedPokemon }: PokemonCardProps): JSX.Element => {
  const [pokemonData, setPokemonData] = useState<PokemonDataApi | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get<PokemonDataApi>(
          `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
        );
        setPokemonData(response.data);
      } catch (error) {
        setPokemonData(null);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [selectedPokemon]);

  return (
    <div className="flex justify-center items-center">
      {pokemonData && !isLoading ? (
        <div className="w-96 rounded-md shadow-lg overflow-hidden">
          <div className="bg-red-500 text-white p-4 text-center text-lg font-bold capitalize">
            {pokemonData.name}
          </div>

          <div className="flex self-center items-center flex-col p-4">
            <img
              src={pokemonData.sprites?.other["official-artwork"].front_default}
              alt={pokemonData.name}
              className="h-64"
            />
            <div className="w-full">
              <div className="my-2">
                <span className="font-bold">Habilidades: </span>
                {pokemonData.abilities
                  ?.map((ability) => ability.ability.name)
                  .join(", ")}
              </div>
              <div className="my-2">
                <span className="font-bold">Altura: </span>
                {pokemonData.height / 10}m
              </div>
              <div className="my-2">
                <span className="font-bold">Peso: </span>
                {pokemonData.weight / 10}
                KG
              </div>
            </div>
          </div>
        </div>
      ) : (
        <PokemonCardLoader />
      )}
    </div>
  );
};

export default PokemonCard;
