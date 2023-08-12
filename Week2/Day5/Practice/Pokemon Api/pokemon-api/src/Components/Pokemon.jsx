import React, { useState, useEffect } from 'react';

const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => res.json())
            .then(res => {
                setPokemonList(res.results);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemonList.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Pokemon;
