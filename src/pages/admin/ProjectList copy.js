import React, { useState, useEffect } from "react";
import { buttons, pokemons } from "./testData";
import { Button } from "react-bootstrap";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { inject, observer } from "mobx-react";
import { axiosError } from "../../stores/common";
import axios from "axios";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});



function ProjectList(props) {
    const {mainStore} = props;
    const {works} = mainStore;
    
    function  changeFundingStatus(work_no, status){
        let data = {work_no : work_no, funding_status : status};
        console.log("승인할 데이터는? " ,data);
        
        axios
          .post("http://localhost:8004/app/admin/changeFundingStatus", data)
          .then((response) => {
            console.log("Done changeWorkStatus", response);
            mainStore.worksRead();

          })
          .catch((error) => {
            axiosError(error);
          });
    }

    
    // useEffect(
    //     ()=>{
    //         mainStore.worksRead();
    //         console.log("워크스 리드실행");
    //     },[mainStore]
    // )

    const artworks = works.map(function(data, i){
        return (
          data
        )
    })

    // const [artworkList2 , setArtWorkList2] = useState("");

    // setArtWorkList2 = [...works];
    // console.log(artworkList2,"리스트으으으ㅡ으으");
    console.log(artworks,"<<<<데이터받기");
    
    // const [filtredPokemon, setFiltredPokemon] = useState(null);
    const [filtredArtwork, setFiltredArtwork] = useState(null);
    
    // useEffect(() => {
    //     setFiltredPokemon(getPokemon());
    // }, []);

    useEffect(() => {
        setFiltredArtwork(getArtwork());
        mainStore.worksRead();
        console.log("필터드 아트워크 실행");
    }, [check]);

    // function getPokemon() {
    //     const pokemonList = pokemons;
    //     return pokemonList;
    // }

    function getArtwork() {
        // const artworkList = artworks;
        const artworkList = works;
        return artworkList;
    }

    // function filterPokemon(pokeType) {
    //     let filtredPokemon = getPokemon().filter(type => type.tipo === pokeType);
    //     return filtredPokemon;
    // }

    function filterArtwork(fundingStatus) {
        let filtredArtwork = getArtwork().filter(type => type.funding_status === fundingStatus);
        return filtredArtwork;
    }
  

    
    // function handlePokemon(e) {
        //     let typePokemon = e.target.value;
        //     typePokemon !== "all"
        //     ? setFiltredPokemon(filterPokemon(typePokemon))
        //     : setFiltredPokemon(getPokemon());
        // }
        
    function handleArtwork(e) {
        let fundingStatus = e.target.value;
        fundingStatus !== "all"
        ? setFiltredArtwork(filterArtwork(fundingStatus))
        : setFiltredArtwork(getArtwork());
    }

    return (
        <div>
            <div className="ButtonGroup" style={{marginTop: '30px', textAlign:'left'}}>
            {buttons &&
                buttons.map((type, index) => (
                    <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}}  key={index} value={type.value} onClick={handleArtwork}>
                    {type.name}
                    </Button>
                    ))}
            </div>
            <div style={{ paddingTop:'50px  ', clear:'both'}}>
            {filtredArtwork &&
                filtredArtwork.map(artWork => (
            <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1080, flexGrow: 1 }} key={artWork.work_no}>
            <Grid container spacing={2} rowSpacing={5}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        {/* <Img alt="complex" src= {`/image/j2.jpg`} /> */}
                        <Img alt="complex" src= {`/image/${artWork.work_img}`} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2} sx={{margin : 2}}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            {artWork.funding_status}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {artWork.artist_name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {artWork.funding_today}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {artWork.work_img}
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
                        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}} onClick={ 
                            ()=> { changeFundingStatus(artWork.work_no,"Approval")}} >
                        승인 하기</Button>
                        <Button variant="outline-secondary" size="sm" style={{marginRight: '10px',  borderRadius:"30px"}}  onClick={ 
                            ()=> { changeFundingStatus(artWork.work_no,"Refuse"); }}>
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

export default inject("mainStore")(observer(ProjectList));
