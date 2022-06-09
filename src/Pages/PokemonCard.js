import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <>
      <div className="w-[320px] lg:w-[665px] mx-auto card lg:card-side bg-base-100 shadow-xl border-2 border-primary hover:cursor-pointer hover:scale-110 transition duration-300">
        <figure>
          <img
            className="lg:w-[250px] lg:px-10 py-5"
            src={pokemon.sprites.other.dream_world.front_default}
            alt="Album"
          />
        </figure>
        <div
          className="card-body px-4 py-4 flex items-center"
          style={{ justifyContent: "center" }}
        >
          <div className="">
            <h2 className="text-center lg:text-left text-2xl font-bold capitalize text-primary mb-4">
              {pokemon.name}
            </h2>
            <div className="text-lg space-y-1">
              <h4>
                <span className="font-medium text-secondary">
                  Base Experience:
                </span>{" "}
                {pokemon.base_experience}
              </h4>
              <h4>
                <span className="font-medium text-secondary">Height:</span>{" "}
                {pokemon.height}
              </h4>
              <h4>
                <span className="font-medium text-secondary">Weight:</span>{" "}
                {pokemon.weight} kg
              </h4>
              <h4>
                <span className="font-medium text-secondary">Moves:</span>{" "}
                <span className="capitalize">
                  {pokemon.moves
                    .map((move) => move.move.name + ", ")
                    .slice(0, 6)}
                </span>
                .
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
