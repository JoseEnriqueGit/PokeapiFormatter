import { useState, useEffect } from "react";
import axios from "axios";
// components
import { Spinner } from "./Icons";
import PokemonCarouselLoader from "./Loader/PokemonCarouselLoader";

interface PokemonCardType {
  selectedPokemon: string;
}

const PokemonCarousel = (props: PokemonCardType): JSX.Element => {
  const [sprites, setSprites] = useState<string[]>([]);
  const [currentSpriteIndex, setCurrentSpriteIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
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
    setIsLoading(false);
  }, [props.selectedPokemon]);

  const handleRotateClick = () => {
    if (currentSpriteIndex === sprites.length - 1) {
      setCurrentSpriteIndex(0);
    } else {
      setCurrentSpriteIndex(currentSpriteIndex + 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <PokemonCarouselLoader />
      ) : (
        <div className="flex justify-center items-center flex-col">
          <div className="w-52 h-52 flex justify-center items-center">
            <img
              src={sprites[currentSpriteIndex]}
              alt={`${props.selectedPokemon} sprite`}
              className="w-full h-full object-contain"
            />
          </div>

          <button
            className="w-96 flex justify-center bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded"
            onClick={handleRotateClick}
          >
            <Spinner stroke="#FFF" height={24} />
          </button>
        </div>
      )}
    </>
  );
};

export default PokemonCarousel;
