import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { UIContext } from "../../context/ui";

export const Navbar = () => {
  const {openSideMenu} = useContext(UIContext)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky' >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={openSideMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Open Jira
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
