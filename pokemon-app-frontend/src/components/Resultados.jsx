import React from "react";
import Stats from './Stats.jsx';
import '../stylesheets/components/Resultados.css';

function Resultados ( props ) {

    const extraerTipo = data => {
        if (data){
            if (data.tipo2 != null){
                return data.tipo1 + ',' + data.tipo2;
            } else {
                return data.tipo1;
            }
        } else {
            return "Type";
        }
    }

    return (
        <>
            <div className="col-pantalla-type">
                <div className="pantalla-pokedex_container">
                    {props.pokemonData ? <h2 className="pokemon_name">{props.pokemonData.name}</h2> : null}
                    <div className="pokemon-information_container">
                        <div className="pokemon-img_container">
                            {props.pokemonData ? <img src={props.pokemonData.imagenOficial} className="pokemon_img" alt="Img del Pokemon" /> : null}
                        </div>
                        <div className="stats_container">
                            {props.pokemonData ? <Stats pokemonData = { props.pokemonData }/> : null}
                        </div>
                    </div>
                </div>
                <div className="type_container">
                    <textarea name="" id="" readOnly className="pokemon-type_textarea" value={ extraerTipo(props.pokemonData) }/>
                </div>
            </div>
            <div className="description_container">
                <textarea name="" id="" readOnly className="pokemon-description_textarea" value={props.pokemonData ? props.pokemonData.flavor_text : "Description"}/>
            </div>
        </>
    );
}

export default Resultados;