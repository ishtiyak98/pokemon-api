import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {}, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedText = e.target.searchField.value;

    if (searchedText) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchedText.toLowerCase()}`)
        .then((res) => res.json())
        .then((data) => setPokemon(data));
    }
  };

  return (
    <div>
      <h1 className="text-4xl lg:text-6xl font-bold text-primary text-center font-mono my-10">
        Pokemon World
      </h1>
      <div className="mt-12 mb-12 text-center">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="searchField"
            placeholder="Search your pokemon"
            className="input input-bordered input-primary w-full max-w-xs mb-2 text-base"
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary text-white mx-3"
          />
        </form>
      </div>
      <div className="w-full py-10">
        {
          pokemon.id && 
          <PokemonCard key={pokemon.id} pokemon={pokemon}></PokemonCard>
        }
      </div>
    </div>
  );
};

export default Home;
