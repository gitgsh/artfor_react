import React, { useState, useEffect } from "react";
import { buttons, pokemons } from "./testData";
import ProjectList from "./ProjectList";



function ManageArtwork() {
    
    const [filtredPokemon, setFiltredPokemon] = useState(null);
    
    function getPokemon() {
        const pokemonList = pokemons;
        return pokemonList;
    }
  
    function filterPokemon(pokeType) {
        let filtredPokemon = getPokemon().filter(type => type.tipo === pokeType);
        return filtredPokemon;
    }
  

    useEffect(() => {
        setFiltredPokemon(getPokemon());
    }, []);

    function handlePokemon(e) {
        let typePokemon = e.target.value;
        typePokemon !== "all"
        ? setFiltredPokemon(filterPokemon(typePokemon))
        : setFiltredPokemon(getPokemon());
        console.log(typePokemon,"<<<<<");
    }

    return (
        <div style={{textAlign: "left", margin : "auto", padding:"80px"}}>
            <p>운영자 페이지</p>
            <h3>ArtWork Status</h3>
            <hr />
                <ProjectList/>
        </div>
    );
}

export default ManageArtwork;