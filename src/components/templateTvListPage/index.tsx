import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import TvList from "../tvList";
import {  TvListPageTemplateProps} from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

const TvListPageTemplate: React.FC<TvListPageTemplateProps> = ({title, action,movies })=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
      <TvList action={action} movies={movies}></TvList>
      </Grid>
    </Grid>
  );
}
export default TvListPageTemplate;
