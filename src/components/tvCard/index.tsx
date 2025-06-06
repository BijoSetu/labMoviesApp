import React, {MouseEvent, useContext} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { BaseMovieProps, TVSeriesProps } from "../../types/interfaces";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";





const styles = {
  card: { maxWidth: 600 },
  media: { height: 300 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface TvCardProps {
  movie: TVSeriesProps;
  action: (m: TVSeriesProps) => React.ReactNode;
}
const TvCard: React.FC<TvCardProps> = ({movie, action}) => {
  const { favourites, addToFavourites } = useContext(MoviesContext);//NEW

const isFavourite = favourites.find((id) => id === movie.id)? true : false;//NEW
 ;

  return (
    <Card sx={styles.card}>
      <CardHeader
         avatar={
          isFavourite ? (   //CHANGED
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h6" component="p">
            {movie.name}{" "}
          </Typography>
        }
      />

      <CardMedia
        sx={styles.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.first_air_date}
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {action(movie)}

        <Link to={`/tv/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default TvCard;
