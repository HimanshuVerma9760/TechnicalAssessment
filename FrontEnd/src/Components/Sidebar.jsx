import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
import ClassIcon from "@mui/icons-material/Class";
import HelpIcon from "@mui/icons-material/Help";
import BarChartIcon from "@mui/icons-material/BarChart";
// import SettingsIcon from "@mui/icons-material/Settings";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { MessageOutlined, NotificationsOutlined } from "@mui/icons-material";

export default function Sidebar() {
  const [open, setopen] = useState(false);

  const handleDrawerToggle = () => {
    setopen(!open);
  };

  const drawerWidth = 248;

  const links = [
    { text: "Dashboard", icon: <DashboardIcon />, route: "/dashboard" },
    { text: "Students", icon: <GroupIcon />, route: "/" },
    { text: "Chapter", icon: <ClassIcon />, route: "/chapter" },
    { text: "Help", icon: <HelpOutlineIcon />, route: "/help" },
    { text: "Report", icon: <BarChartIcon />, route: "/report" },
    { text: "Settings", icon: <SettingsOutlinedIcon />, route: "/settings" },
  ];

  const drawerContent = (
    <Box>
      <Typography sx={{ p: 2 }}>
        <img src="logo.svg" alt="Logo" />
      </Typography>

      <List>
        {links.map((link) => (
          <ListItem
            button
            key={link.text}
            component={NavLink}
            to={link.route}
            sx={{
              color: "#6F767E",
              "&.active": {
                color: "black",
                backgroundColor: "#f0f0f0",
              },
            }}
          >
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight:"700",
                    fontSize: "16px",
                  }}
                >
                  {link.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          maxWidth: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#F6F8FA",
          boxShadow: "none",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            overflow: "hidden",
          }}
        >
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, mr: 2, color: "grey" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: 1,
              p: 0.5,
              pl: 2,
              width: "100%",
              // padding: "1.3rem",
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                color: "black",
                width: "614px",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                padding: "0.3rem",
                maxWidth: "100%",
                boxSizing: "border-box",
              }}
              placeholder="Search your course"
              startAdornment={
                <Box>
                  <SearchIcon
                    sx={{
                      color: "grey",
                      marginLeft: "5px",
                      marginRight: "5px",
                      marginTop: "5px",
                    }}
                  />
                </Box>
              }
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: { xs: 3, sm: "40px" },
            }}
          >
            <IconButton color="inherit">
              <HelpOutlineIcon
                sx={{ color: "#808281", fontSize: { xs: "17px", sm: "25px" } }}
              />
            </IconButton>
            <IconButton color="inherit">
              <Badge>
                <MessageOutlined
                  sx={{
                    color: "#808281",
                    fontSize: { xs: "17px", sm: "25px" },
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <TuneOutlinedIcon
                sx={{ color: "#808281", fontSize: { xs: "17px", sm: "25px" } }}
              />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={5} color="error">
                <NotificationsOutlined
                  sx={{
                    color: "#6F767E",
                    fontSize: { xs: "17px", sm: "25px" },
                  }}
                />
              </Badge>
            </IconButton>
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar
                alt="Admin"
                src="/Katy Cox.svg"
                sx={{
                  borderRadius: 0,
                  margin: "0.3rem",
                  width: { xs: "23px", sm: "45px" },
                  height: { xs: "23px", sm: "45px" },
                }}
              />
              <Typography
                variant="body1"
                noWrap
                sx={{
                  color: "#05162E",
                  fontFamily: "Noto Sans",
                  fontSize: { xs: "12px", sm: "18px" },
                  fontWeight: "600",
                }}
              >
                Adeline H. Dancy
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar"
      >
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawerContent}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
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
