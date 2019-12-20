import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/Pokelist.scss';

function Pokelist(props) {
    return (
        <ul className="list">
            {props.pokemons.map((pokemon, i) => {
                return <Pokemon
                    key={i}
                    className="list"
                    name={pokemon.name}
                    types={pokemon.types}
                    url={pokemon.url} />
            }
            )}

        </ul>
    )
}

export default Pokelist;