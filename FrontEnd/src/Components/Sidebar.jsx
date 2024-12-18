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
  Input,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import MessageIcon from "@mui/icons-material/Message";
import FilterListIcon from "@mui/icons-material/FilterList";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HelpIcon from "@mui/icons-material/Help";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerWidth = 240;

  const links = [
    { text: "Dashboard", icon: <DashboardIcon />, route: "/dashboard" },
    { text: "Students", icon: <GroupIcon />, route: "/students" },
    { text: "Chapter", icon: <MenuBookIcon />, route: "/chapter" },
    { text: "Help", icon: <HelpIcon />, route: "/help" },
    { text: "Report", icon: <BarChartIcon />, route: "/report" },
    { text: "Settings", icon: <SettingsIcon />, route: "/settings" },
  ];

  const drawerContent = (
    <Box>
      <Typography
        variant="h5"
        sx={{ p: 2, fontWeight: "bold", fontFamily: "sans-serif" }}
      >
        Quyl.
      </Typography>
      <List>
        {links.map((link) => (
          <ListItem
            sx={{ color: "black" }}
            button
            key={link.text}
            component={NavLink}
            to={link.route}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
              backgroundColor: isActive ? "#f0f0f0" : "transparent",
            })}
          >
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", marginBottom: { xs: "2rem", sm: "1px" } }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "whitesmoke",
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
              padding:'1.3rem'
            }}
          >
            <InputBase
              sx={{
                ml: 1,
                color: "black",
                width: "100%",
                backgroundColor: "white",
                borderRadius: "0.5rem",
                padding: "0.3rem",
                maxWidth: "100%",
                boxSizing: "border-box",
              }}
              placeholder="Search your courses"
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
              alignItems: "center",
              gap: { xs: 3, sm: 5 },
              marginLeft: { xs: 6, sm: 10 },
              marginRight: { xs: 6, sm: 10 },
            }}
          >
            <IconButton color="inherit">
              <HelpOutlineIcon
                sx={{ color: "grey", fontSize: { xs: "17px", sm: "25px" } }}
              />
            </IconButton>
            <IconButton color="inherit">
              <Badge>
                <MessageIcon
                  sx={{ color: "grey", fontSize: { xs: "17px", sm: "25px" } }}
                />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <FilterListIcon
                sx={{ color: "grey", fontSize: { xs: "17px", sm: "25px" } }}
              />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={5} color="error">
                <NotificationsIcon
                  sx={{ color: "grey", fontSize: { xs: "17px", sm: "25px" } }}
                />
              </Badge>
            </IconButton>
            <Box display="flex" alignItems="center" gap={1}>
              <Avatar
                alt="Admin"
                src="/static/images/avatar/1.jpg"
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
                  color: "black",
                  fontSize: { xs: "12px", sm: "18px" },
                  fontWeight: "bold",
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
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="sidebar"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
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
