import React, { useState, MouseEvent } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
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
  const location = useLocation(); // Get the current route
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Define routes where the header should not be displayed
  const hideHeaderRoutes = ["/login"];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

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

  if (!shouldShowHeader) {
    return null; // Do not render the header if the current route is in hideHeaderRoutes
  }

  return (
    <>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={styles.title}>
            The MovieTube
          </Typography>
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
