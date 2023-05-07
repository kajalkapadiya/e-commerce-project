import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Store from "./Store";
import About from "./About";
import Navigator from "./Navigator";
import ProductDetails from "./ProductDetails";
import { useContext } from "react";
import AuthProfile from "../auth/AuthProfile";
import AuthForm from "../auth/AuthForm";
import AuthContext from "../auth/AuthContext";

const NavbarData = () => {
  const authCntx = useContext(AuthContext);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/products">
          {authCntx.isLoggedIn && <Store />}
          {!authCntx.isLoggedIn && <AuthForm />}
        </Route>
        {authCntx.isLoggedIn && (
          <Route path="/authprofile">
            <AuthProfile />
          </Route>
        )}
        <Route path="/AuthForm">
          {authCntx.isLoggedIn && <Store />}
          {!authCntx.isLoggedIn && <AuthForm />}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/navigator">
          <Navigator />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </>
  );
};

export default NavbarData;
