import React from "react";
import Grid from "@mui/material/Grid";
import ActorCard from "../actorCard";
import { ActorProps } from "../../types/interfaces";

interface ActorListProps {
  actors: ActorProps[];
  action: (a: ActorProps) => React.ReactNode;
}

const ActorList: React.FC<ActorListProps> = ({ actors, action }) => {
  return (
    <Grid container spacing={2}>
      {actors.map((actor) => (
        <Grid key={actor.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <ActorCard actor={actor} action={action} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ActorList;