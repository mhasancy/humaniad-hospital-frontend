// imported file
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../UserAuthorize/AdminRoute/AdminRoute";
import AddingReview from "../AddingReview/AddingReview";
import Appointment from "../Appointment/Appointment";
import DashboardHome from "../DashboardHome/DashboardHome";
import DiscountMaintain from "../DiscountMaintain/DiscountMaintain";
import ManageAppointment from "../ManageAppointment/ManageAppointment";
import MyAppointments from "../MyAppointments/MyAppointments";
import Payment from "../Payment/Payment";
import ReviewChecking from "../ReviewChecking/ReviewChecking";

//  dashboard component
const Dashboard = (props) => {
  const drawerWidth = 230;
  const { firebaseContext } = useAuth();
  const { admin, logOut } = firebaseContext;
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar>
        <Typography
          sx={{ fontSize: "1.2rem" }}
          variant="button"
          display="block"
          gutterBottom
        >
          Menu
        </Typography>
      </Toolbar>
      <Divider />
      <Link to="/">
        <Button size="large" sx={{ width: "100%" }}>
          <ListItem>Home</ListItem>
        </Button>
      </Link>
      <Link to={`${url}`}>
        <Button size="large" sx={{ width: "100%" }}>
          <ListItem>Dashboard</ListItem>
        </Button>
      </Link>
      {admin && (
        <>
          <Link to={`${url}/all-appointments`}>
            <Button size="large" sx={{ width: "100%" }}>
              <ListItem>Appointments</ListItem>
            </Button>
          </Link>

          <Link to={`${url}/review-checking`}>
            <Button size="large" sx={{ width: "100%" }}>
              <ListItem>Checking Reviews </ListItem>
            </Button>
          </Link>
          <Link to={`${url}/discount-maintain`}>
            <Button size="large" sx={{ width: "100%" }}>
              <ListItem>Discount Maintain</ListItem>
            </Button>
          </Link>
        </>
      )}

      {!admin && (
        <>
          {" "}
          <Link to={`${url}/payment`}>
            <Button size="large" sx={{ width: "100%" }}>
              <ListItem>Payment</ListItem>
            </Button>
          </Link>
          <Link to={`${url}/my-appointments`}>
            <Button size="large" sx={{ width: "100%" }}>
              <ListItem>My Appointment</ListItem>
            </Button>
          </Link>
          <Link to={`${url}/add-reviews`}>
            <Button size="large" sx={{ width: "100%" }}>
              <ListItem>Add Reviews</ListItem>
            </Button>
          </Link>
          <Link to={`${url}/appointment`}>
            <Button size="large" sx={{ width: "100%" }}>
              <ListItem>Make Appointment</ListItem>
            </Button>
          </Link>
        </>
      )}

      <Button onClick={logOut} size="large" sx={{ width: "100%" }}>
        <ListItem>Log Out</ListItem>
      </Button>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
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
          <Typography
            sx={{ fontSize: "1.2rem" }}
            variant="button"
            noWrap
            component="div"
          >
            Dashboard
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
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashboardHome />
          </Route>

          <AdminRoute path={`${path}/review-checking`}>
            <ReviewChecking></ReviewChecking>
          </AdminRoute>

          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/my-appointments`}>
            <MyAppointments></MyAppointments>
          </Route>
          <AdminRoute path={`${path}/all-appointments`}>
            <ManageAppointment></ManageAppointment>
          </AdminRoute>
          <AdminRoute path={`${path}/discount-maintain`}>
            <DiscountMaintain></DiscountMaintain>
          </AdminRoute>
          <Route path={`${path}/add-reviews`}>
            <AddingReview></AddingReview>
          </Route>
          <Route path={`${path}/appointment`}>
            <Appointment></Appointment>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
};

export default Dashboard;
