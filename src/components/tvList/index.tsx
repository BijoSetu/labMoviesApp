import React from "react";
import TvCard from "../tvCard/";
import Tv from "../tvCard/";
import Grid from "@mui/material/Grid";
import {  BaseTvListProps } from "../../types/interfaces";



const TvList: React.FC<BaseTvListProps> = ({movies, action}) => {
  let tvCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
         <Tv key={m.id} movie={m} action={action}/>
    </Grid>
  ));
  return tvCards;
   
}

export default TvList;