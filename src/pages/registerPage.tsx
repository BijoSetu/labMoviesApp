import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Card, CardContent } from "@mui/material";
import { signIn } from "../api/register-api";
import { SignInFormData } from "../types/interfaces";
import { SxProps, Theme } from "@mui/material";
import { useUser } from "../contexts/registerContext";

const styles: Record<string, SxProps<Theme>> = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "radial-gradient(circle, #1e3c72 0%, #2a5298 100%)",
    color: "#fff",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
  },
  cardContent: {
    padding: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  input: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ecf0f1",
      },
      "&:hover fieldset": {
        borderColor: "#3498db",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3498db",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#ecf0f1",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#3498db",
    },
  },
  submitButton: {
    marginTop: "1rem",
    padding: "12px",
    fontWeight: "bold",
    backgroundColor: "#3498db",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2980b9",
    },
  },
  errorText: {
    color: "#e74c3c",
    textAlign: "center",
    marginBottom: "1rem",
  },
};

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useUser();
  const [formData, setFormData] = useState<SignInFormData>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const resp = await signIn(formData);
      console.log(resp.token);
      setIsLoggedIn(true);
      navigate("/");
    } catch (err) {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <Box sx={styles.root}>
      <Card sx={styles.card}>
        <CardContent sx={styles.cardContent}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Welcome Back
          </Typography>

          {error && <Typography sx={styles.errorText}>{error}</Typography>}

          <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
            <TextField
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              sx={styles.input}
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              sx={styles.input}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={styles.submitButton}
            >
              Sign In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;