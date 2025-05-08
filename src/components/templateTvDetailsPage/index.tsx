import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import imgPlaceholder from "../../images/film-poster-placeholder.png";
import TVSeriesHeader from "../headerTvDetails";
import { TVSeriesProps } from "../../types/interfaces";

interface TemplateProps {
  series: TVSeriesProps;
  children: React.ReactNode;
}

const TemplateTVDetailsPage: React.FC<TemplateProps> = ({ series, children }) => {
  const imagePath = series.poster_path
    ? `https://image.tmdb.org/t/p/w500/${series.poster_path}`
    : imgPlaceholder;

  return (
    <>
      {/* Header at the top */}
      <TVSeriesHeader {...series} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <Paper elevation={3} style={{ padding: "10px" }}>
            <img
              src={imagePath}
              alt={series.name}
              style={{ width: "100%", borderRadius: "8px", marginBottom: "15px" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateTVDetailsPage;