const PokemonCarouselLoader = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-40 h-40 m-3 flex justify-center items-center rounded-lg overflow-hidden shadow-lg">
        <div className="animate-pulse bg-gray-200 w-full h-full"></div>
      </div>

      <button className="w-96 flex justify-center bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">
        <div className="mr-2">
          <div className="h-5 w-16 rounded-full bg-white animate-pulse"></div>
        </div>
      </button>
    </div>
  );
}

export default PokemonCarouselLoader;
