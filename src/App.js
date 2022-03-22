//imported file
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home/Home";
import Research from "./Pages/Home/Research/Research";
import NotFound from "./Pages/NotFound/NotFound";
import ReviewOrder from "./Pages/ReviewOrder/ReviewOrder";
import Products from "./Pages/Shared/Products/Products";
import Login from "./Pages/UserAuthorize/Login/Login";
import PrivateRoute from "./Pages/UserAuthorize/PrivateRoute/PrivateRoute";
import SignUp from "./Pages/UserAuthorize/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/review-order/:serviceId">
              <ReviewOrder></ReviewOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/appointment">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <Route exact path="/research">
              <Research></Research>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
