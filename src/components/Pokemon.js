import React from 'react';
import '../stylesheets/Pokemon.scss';

function Pokemon(props) {
    return (
        <li className="item-list">
            <img src={props.url} alt={props.name}></img>
            <h2 className="name">{props.name}</h2>
            <div className="types">
                {props.types.map((type, i) => {
                    return (
                        <p
                            className="types__item"
                            key={i}>
                            {type}
                        </p>
                    )
                }
                )
                }
            </div>
        </li>
    )
}

export default Pokemon;