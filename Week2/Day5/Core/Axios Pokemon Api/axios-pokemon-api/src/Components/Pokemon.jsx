import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
    const [poke, setPoke] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
                setPoke(res.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {poke.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Pokemon;
