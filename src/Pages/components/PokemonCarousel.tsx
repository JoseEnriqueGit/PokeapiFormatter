import { useState, useEffect } from "react";
import axios from "axios";
// components
import { Spinner } from "./Icons";

interface PokemonCardType {
  selectedPokemon: string;
}

const PokemonCarousel = (props: PokemonCardType): JSX.Element => {
  const [sprites, setSprites] = useState<string[]>([]);
  const [currentSpriteIndex, setCurrentSpriteIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.selectedPokemon}`)
      .then((response) => {
        const frontSprite = response.data.sprites.front_default;
        const backSprite = response.data.sprites.back_default;
        setSprites([frontSprite, backSprite]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.selectedPokemon]);

  const handleNextClick = () => {
    if (currentSpriteIndex === sprites.length - 1) {
      setCurrentSpriteIndex(0);
    } else {
      setCurrentSpriteIndex(currentSpriteIndex + 1);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      {sprites.length > 0 ? (
        <div className="w-52 h-52 flex justify-center items-center">
          <img
            src={sprites[currentSpriteIndex]}
            alt={`${props.selectedPokemon} sprite`}
            className="w-full h-full object-contain"
          />
        </div>
      ) : (
        <div className="w-64 h-64 flex justify-center items-center">
          <p>Loading...</p>
        </div>
      )}
      <button
        className="w-96 flex justify-center bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
        onClick={handleNextClick}
      >
        <Spinner stroke="#FFF" height={24} />
      </button>
    </div>
  );
};

export default PokemonCarousel;
