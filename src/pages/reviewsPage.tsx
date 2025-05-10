import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getReviews  } from "../api/aws-api"; // Add a function to fetch reviews

const styles = {
  card: {
    maxWidth: 345,
    margin: "1rem",
  },
  media: {
    height: 140,
  },
};

interface Review {
  Author: string;
  ReviewText: string;
  Rating: string;
  MovieName: string;
  PhotoUrl: string;
}

const ReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getReviews(); // Fetch reviews from the backend
        setReviews(response);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
      <Grid container spacing={2} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item key={index}>
            <Card sx={styles.card}>
              <CardMedia
                sx={styles.media}
                image={`https://image.tmdb.org/t/p/w500/${review.PhotoUrl}`}
                title={review.MovieName}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {review.MovieName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Author:</strong> {review.Author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Rating:</strong> {review.Rating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Review:</strong> {review.ReviewText}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
  
  );
};

export default ReviewsPage;