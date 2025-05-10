import React, { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
    title: {
      flexGrow: 0.5,
    },
  };

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favourites" },
    { label: "Upcoming movies", path: "/movies/upcoming" },
    { label: "Popular movies", path: "/movies/popular" },
    { label: "TV Series", path: "/tv" },
    { label: "Actors", path: "/actors" },
    { label: "Reviews", path: "/movie/reviews" },
    { label: "FantasyMovie", path: "/movie/fantasymovie" },
    { label: "Logout", path: "/login" },
  ];

  const handleMenuSelect = (pageURL: string) => {
    navigate(pageURL);
  };

  const handleMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={styles.title}>
            The MovieTube
          </Typography>
          {/* <Typography variant="h6" sx={styles.title}>
            All you ever wanted to know about Movies!
          </Typography> */}
          <>
            {menuOptions.map((opt) => (
              <Button
                key={opt.label}
                color="inherit"
                onClick={() => handleMenuSelect(opt.path)}
                sx={
                  opt.label === "Logout"
                    ? {
                        fontWeight: "bold",
                        color: "white",
                        backgroundColor: "red", // Red background for Logout
                        borderRadius: "8px",
                        padding: "0.2rem 0.6rem",
                        marginLeft: "0.5rem", // Add spacing between buttons
                        "&:hover": {
                          backgroundColor: "darkred", // Darker red on hover
                        },
                      }
                    : {
                        marginLeft: "0rem", // Add spacing between buttons
                      }
                }
              >
                {opt.label}
              </Button>
            ))}
          </>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
