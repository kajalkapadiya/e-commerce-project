import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import Store from "./pages/Store";
import About from "./pages/About";
import Navigator from "./pages/Navigator";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import LoginForm from "./Store/LoginForm";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/products" exact>
            <Store />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/LoginForm">
            <LoginForm />
          </Route>
          <Route path="/navigator">
            <Navigator />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
