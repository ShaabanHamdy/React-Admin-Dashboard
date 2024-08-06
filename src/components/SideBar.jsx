import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MapOutlined,
  PeopleAltOutlined,
  PersonOutlined,
  PieChartOutlined,
  ReceiptOutlined,
  TimelineOutlined
} from "@mui/icons-material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Avatar, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
// ==============================================================
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
// ==============================================================

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
// ==============================================================

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
// ==============================================================

const SideBar = ({ open, handleDrawerClose }) => {
  // ==============================================================
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  // ==============================================================

  const ArrayList1 = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
      path: "/",
    },
    {
      text: "Manage Team",
      icon: <PeopleAltOutlined />,
      path: "/team",
    },
    {
      text: "Contacts Information",
      icon: <ContactsOutlined />,
      path: "/contacts",
    },
    {
      text: "Invoices Balances",
      icon: <ReceiptOutlined />,
      path: "/invoices",
    },
  ];

  // ==============================================================

  const ArrayList2 = [
    {
      text: "Profile Form",
      icon: <PersonOutlined />,
      path: "/form",
    },
    {
      text: "Calendar",
      icon: <CalendarTodayOutlined />,
      path: "/calendar",
    },
    {
      text: "FAQ Page",
      icon: <HelpOutlineOutlined />,
      path: "/faq",
    },
  ];
  // ==============================================================

  const ArrayList3 = [
    {
      text: "Bar Chart",
      icon: <BarChartOutlined />,
      path: "/barChart",
    },
    {
      text: "Pie Chart",
      icon: <PieChartOutlined />,
      path: "/PieChar",
    },
    {
      text: "Line Chart",
      icon: <TimelineOutlined />,
      path: "/LineChart",
    },
    {
      text: "Geography Chart",
      icon: <MapOutlined />,
      path: "/geography",
    },
  ];

  return (
    <>
      <Drawer variant="permanent" open={open}>
        {/* // ============================================================== */}
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {/* // ============================================================== */}
        <div></div>
        {open ? (
          <>
            <Avatar
              sx={{
                mx: "auto",
                width: 80,
                height: 90,
                transition: "0.50s",
                border: "1px solid",
              }}
              alt="admin Image"
              src="/src/assets/image.jpg"
            />
            <Typography
              sx={{ fontSize: 16, transition: "0.50s" }}
              align="center"
            >
              Shaaban
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                color: theme.palette.info.main,
                transition: "0.50s",
              }}
              align="center"
            >
              Admin
            </Typography>
          </>
        ) : (
          <>
            <Avatar
              sx={{
                mx: "auto",
                my: "10px",
                width: 50,
                height: 50,
                transition: "0.50s",
                border: "1px solid",
              }}
              alt="admin Image"
              src="/src/assets/image.jpg"
            />
            <Typography
              sx={{ fontSize: 0, transition: "0.50s" }}
              align="center"
            >
              Shaaban
            </Typography>
            <Typography
              sx={{ fontSize: 0, transition: "0.50s" }}
              align="center"
            >
              Admin
            </Typography>
          </>
        )}

        <Divider />
        {/* // ============= list 1 ================================================= */}

        <List>
          {ArrayList1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor: location.pathname == item.path ? theme.palette.mode == "dark" ? theme.palette.grey[800] : theme.palette.grey[400]  : ""
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* // ============================================================== */}
        <Divider />

        {/* // ==============list 2 ================================================ */}
        <List>
          {ArrayList2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor: location.pathname == item.path ? theme.palette.mode == "dark" ? theme.palette.grey[800] : theme.palette.grey[400]  : ""

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* // ============================================================== */}
        <Divider />
        {/* // =====================list 3 ========================================= */}
        <List>
          {ArrayList3.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor: location.pathname == item.path ? theme.palette.mode == "dark" ? theme.palette.grey[800] : theme.palette.grey[400]  : ""

                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* // ============================================================== */}
      </Drawer>
    </>
  );
};

export default SideBar;
