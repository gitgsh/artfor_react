import React, { useState, useEffect } from "react";
import { buttons, pokemons } from "./testData";
import { Button } from "react-bootstrap";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });


function ProjectList() {
    
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
    }

    return (
        <div>
            <div className="ButtonGroup" style={{marginTop: '30px', textAlign:'left'}}>
            {buttons &&
                buttons.map((type, index) => (
                    <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}}  key={index} value={type.value} onClick={handlePokemon}>
                    {type.name}
                    </Button>
                    ))}
            </div>
            <div style={{ paddingTop:'50px  ', clear:'both'}}>
            {filtredPokemon &&
                filtredPokemon.map(type => (
            <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1080, flexGrow: 1 }} key={type.id}>
            <Grid container spacing={2} rowSpacing={5}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src="/doggg.jpg" />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2} sx={{margin : 2}}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {type.tipo}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {type.nome}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ID: 1030114
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Remove
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sx={{width:128, margin:5}} >
                        <Typography variant="subtitle1" component="div">
                        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}}  >
                        승인 하기</Button>
                        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}}  >
                        반려 하기</Button>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            </Paper>
            ))}
            </div>
            
        </div>
    );
}

export default ProjectList;
