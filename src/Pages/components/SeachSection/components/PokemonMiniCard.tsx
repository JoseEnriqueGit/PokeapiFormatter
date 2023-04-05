interface IPokemonMiniCard {
  sprite: string;
  name: string;
  setSelectedPokemon: (newValue: string) => void;
}

const PokemonMiniCard = ({
  sprite,
  name,
  setSelectedPokemon,
}: IPokemonMiniCard): JSX.Element => {
  const handlePokemonClick = (): void => {
    setSelectedPokemon(name);
  };

  return (
    <div
      onClick={handlePokemonClick}
      className="bg-white flex self-center items-center flex-col w-full rounded-md p-2 hover:bg-gray-100"
    >
      <img
        className="h-20"
        src={sprite}
        alt={`Sprite de ${name}`}
      />
      <span className="PokeName">{name}</span>
    </div>
  );
};

export default PokemonMiniCard;
