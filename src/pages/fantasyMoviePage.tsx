import React, { useState } from "react";
import { Box, TextField, Button, Typography, Grid, Card, CardContent } from "@mui/material";
import { postFantasyMovie } from "../api/aws-api"; // Adjust the import path as necessary

const styles = {
  formContainer: {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  formField: {
    marginBottom: "1rem",
  },
  card: {
    maxWidth: 345,
    margin: "1rem",
  },
};

interface FantasyMovie {
  title: string;
  overview: string;
  genres: string;
  releaseDate: string;
  runtime: string;
  productionCompany: string;
}

const AddFantasyMoviePage: React.FC = () => {
  const [formData, setFormData] = useState<FantasyMovie>({
    title: "",
    overview: "",
    genres: "",
    releaseDate: "",
    runtime: "",
    productionCompany: "",
  });

  const [fantasyMovies, setFantasyMovies] = useState<FantasyMovie[]>([]); // Local state to store added movies
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fantasyMovieData = {
      Title: formData.title,
      Overview: formData.overview,
      Genres: formData.genres,
      ReleaseDate: formData.releaseDate,
      Runtime:  Number(formData.runtime),
      ProductionCompany: formData.productionCompany,
    };

    try {
      console.log("Calling postFantasyMovie with data:", fantasyMovieData); // Debugging log
      const result = await postFantasyMovie(fantasyMovieData); // Call the postFantasyMovie function
      console.log("Fantasy movie posted successfully:", result); // Debugging log

      // Update the fantasyMovies state with the newly added movie
      setFantasyMovies((prevMovies) => [...prevMovies, formData]); // Add the current form data to the list
      setFormData({
        title: "",
        overview: "",
        genres: "",
        releaseDate: "",
        runtime: "",
        productionCompany: "",
      }); // Reset the form
      setSubmitted(true); // Indicate successful submission
    } catch (error) {
      console.error("Failed to post fantasy movie:", error); // Debugging log
    }
  };

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Add Fantasy Movie
      </Typography>
      <Box sx={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                required
                sx={styles.formField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Overview"
                name="overview"
                value={formData.overview}
                onChange={handleChange}
                fullWidth
                required
                sx={styles.formField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Genres"
                name="genres"
                value={formData.genres}
                onChange={handleChange}
                fullWidth
                required
                sx={styles.formField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Release Date"
                name="releaseDate"
                value={formData.releaseDate}
                onChange={handleChange}
                fullWidth
                required
                sx={styles.formField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Runtime"
                name="runtime"
                value={formData.runtime}
                onChange={handleChange}
                fullWidth
                required
                sx={styles.formField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Production Company"
                name="productionCompany"
                value={formData.productionCompany}
                onChange={handleChange}
                fullWidth
                required
                sx={styles.formField}
              />
            </Grid>
          </Grid>
          <Box mt={2} textAlign="center">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" align="center" gutterBottom>
          {submitted && fantasyMovies.length > 0
            ? "Fantasy Movies"
            : "No Fantasy Movie Added"}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {fantasyMovies.map((movie, index) => (
            <Grid item key={index}>
              <Card sx={styles.card}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Overview:</strong> {movie.overview}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Genres:</strong> {movie.genres}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Release Date:</strong> {movie.releaseDate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Runtime:</strong> {movie.runtime}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Production Company:</strong> {movie.productionCompany}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AddFantasyMoviePage;