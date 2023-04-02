interface PokemonMiniCard {
  sprite: string;
  name: string;
  setSelectedPokemon: (newValue: string) => void;
}

const PokemonMiniCard = (props: PokemonMiniCard) => {
  const handlePokemonClick = (pokemonName: string): void => {
    props.setSelectedPokemon(pokemonName);
  };

  return (
    <div
      onClick={() => handlePokemonClick(props.name)}
      className="bg-white flex self-center items-center flex-col w-full rounded-md p-2"
    >
      <img
        className="h-20"
        src={props.sprite}
        alt={`Sprite de ${props.name}`}
      />
      <span className="PokeName">{props.name}</span>
    </div>
  );
};

export default PokemonMiniCard;
