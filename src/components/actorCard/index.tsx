import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ActorProps } from "../../types/interfaces";

const styles = {
  card: { maxWidth: 600 },
  media: { height: 300 },
  avatar: {
    backgroundColor: "rgb(0, 123, 255)", // Blue color for actors
  },
};

interface ActorCardProps {
  actor: ActorProps;
  action: (a: ActorProps) => React.ReactNode;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor, action }) => {
  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
          <Avatar sx={styles.avatar}>
            {actor.name.charAt(0)} {/* First letter of the actor's name */}
          </Avatar>
        }
        title={
          <Typography variant="h6" component="p">
            {actor.name}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              Popularity: {actor.popularity.toFixed(1)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actor.known_for_department}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(actor)}
        <Button variant="outlined" size="medium" color="primary">
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActorCard;