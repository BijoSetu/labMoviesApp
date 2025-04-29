import React from "react";
import IconButton from "@mui/material/IconButton";
import { BaseMovieProps } from "../../types/interfaces";
import PlayListAddIcon from "@mui/icons-material/PlaylistAdd";



const AddToPlaylistIcon: React.FC<BaseMovieProps> = (movie) => {
  const handleAddToWatchlist = () => {
    console.log(`Added ${movie.title} to watchlist`);
  };

  return (
    <IconButton aria-label="add to watchlist" onClick={handleAddToWatchlist}>
      <PlayListAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;