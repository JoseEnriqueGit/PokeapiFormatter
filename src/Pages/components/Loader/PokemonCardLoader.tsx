const PokemonCardLoader = (): JSX.Element => {
  return (
    <div className="w-96 rounded-md shadow-lg overflow-hidden animate-pulse">
      <div className="bg-gray-300 h-24"></div>
      <div className="flex self-center items-center flex-col p-4">
        <div className="h-64 bg-gray-300 w-full"></div>
        <div className="w-full">
          <div className="my-2">
            <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
          </div>
          <div className="my-2">
            <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
          </div>
          <div className="my-2">
            <div className="h-4 bg-gray-300 w-1/4 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCardLoader;
