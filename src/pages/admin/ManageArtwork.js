import React, { useState, useEffect } from "react";
import { buttons, pokemons } from "./testData";
import ProjectList from "./ProjectList";
import { FcInspection } from "react-icons/fc";
import "./AdminMain.css";


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
        <div className="setting-margin-abox">
            <div className="setting-abox-1" >
              <div className="myicon-abox" style={{marginTop:'23px'}}>
                  <FcInspection size="80" />
              </div>
              <div className="myname-abox">
                <h2>
                  운영자 페이지
                </h2>
                <h4>게시물 관리</h4>
              </div>
            </div>
              <div style={{clear:'both', borderBottom:'1px solid #e8e8e8'}} />
      
              <div className="setting-abox-1" >
            <ProjectList/>
            </div>
            
            
        </div>
    );
}

export default ManageArtwork;