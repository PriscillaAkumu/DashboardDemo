import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import Total from "../assets/total.png";
import AddIcon from '@mui/icons-material/Add';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import SettingsIcon from '@mui/icons-material/Settings';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Img from "../assets/logo.webp";


// import Content from "../components/Content";
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#fff", height: "100%" }}>
      <Box>
        {/* <img src={Total} alt="logo" height={40} width={35} /> */}

        <Stack
          direction="column"
          spacing={1}
          justifyContent="center"
          align="center"
        >
          <img
            src={Img}
            alt="logo"
            style={{
              height: "110px",
              width: "140px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop:'10px',
            }}
          />
           <Avatar  
          style={{
              height: 56,
              width: 56,
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop:'30px',
            }}
            /> 


          <Typography
            color="#fff"
            variant="h5"
            sx={{ fontWeight: "600", color: "#111122" }}
          >
            Systems Manager
          </Typography>
          <Typography color="#111122" variant="h5">
            ADMIN
          </Typography>
        </Stack>
        <Box  justifyContent="center" align="center" 
          sx={{ width: '100%', height: 400,   overflow: 'auto', position:'sticky'}}>
        <List 
            //   sx={{
            //     width: '100%',  
            //     position: 'relative',
            //     overflow: 'auto',

            //     maxHeight: 300,
            //     '& ul': { padding: 0 },
            //   }}
        
        >
          <ListItemButton

          >
            <ListItemIcon>
              <DashboardIcon style={{ color: "#111122" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" style={{ color: "#111122",  }} />
          </ListItemButton>

          <ListItemButton

          >
            <ListItemIcon>
              <AddIcon style={{ color: "#111122" }} />
            </ListItemIcon>
            <ListItemText primary="Add Data" style={{ color: "#111122" }} />
          </ListItemButton>

          <ListItemButton

          >
            <ListItemIcon>
              <SwapVertIcon style={{ color: "#111122" }} />
            </ListItemIcon>
            <ListItemText primary="Create" style={{ color: "#111122" }} />
          </ListItemButton>

          <ListItemButton

          >
            <ListItemIcon>
              <FileCopyIcon style={{ color: "#111122" }} />
            </ListItemIcon>
            <ListItemText primary="System Logs" style={{ color: "#111122" }} />
          </ListItemButton>

          <ListItemButton
           
          >
            <ListItemIcon>
              <RestoreFromTrashIcon style={{ color: "#111122" }} />
            </ListItemIcon>
            <ListItemText primary="Recycle Bin" style={{ color: "#111122" }} />
          </ListItemButton>

          <ListItemButton
            
          >
            <ListItemIcon>
              <SettingsIcon style={{ color: "#111122" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" style={{ color: "#111122" }} />
          </ListItemButton>
        </List>
        </Box>
       
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          color: "#4267B3",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap component="div" sx={{fontWeight:'700', color: "#111122"}}>
            Welcome To The ToolBox
          </Typography>

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            backgroundColor: "#4267B3",
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          overflowX: "auto",
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
