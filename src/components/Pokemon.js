import React from 'react';

function Pokemon(props) {
    // console.log(props.name);
    return (
        <li className="item-list">
            <img className="img" src={props.url} alt={props.name}></img>
            <h3 className="name">{props.name}</h3>
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