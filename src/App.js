import { Redirect, Route, Switch } from "react-router";
import MainHeader from "./components/MainHeader";
import Home from "./pages/Home";
import ProducstDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProducstDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
