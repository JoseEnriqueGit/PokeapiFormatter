import { useState, useEffect } from "react";
import axios from "axios";
// components
import unknown from "../../assets/unknow.png";

interface PokemonCardType {
  selectedPokemon: string;
}

const PokemonCard = (props: PokemonCardType) => {
  const [pokemonData, setPokemonData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + props.selectedPokemon
      );
      setPokemonData(response.data);
    };
    fetchData();
  }, [props.selectedPokemon]);

  return (
    <div className="flex justify-center items-center">
      {pokemonData.name ? (
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
                <span className="font-bold">Habilidades:</span>{" "}
                {pokemonData.abilities
                  ?.map((ability: any) => ability.ability.name)
                  .join(", ")}
              </div>
              <div className="my-2">
                <span className="font-bold">Altura:</span>{" "}
                {pokemonData.height / 10}m
              </div>
              <div className="my-2">
                <span className="font-bold">Peso:</span>{" "}
                {pokemonData.weight / 10}
                KG
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-96 h-96 rounded-md overflow-hidden">
          <img src={unknown} alt={pokemonData.name} className="" />
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
