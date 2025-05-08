import React, {MouseEvent, useContext} from "react";
import { TvContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TVSeriesProps} from "../../types/interfaces"

const AddTvToFavouritesIcon: React.FC<TVSeriesProps> = (movie) => {
  const context = useContext(TvContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };
  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddTvToFavouritesIcon;
