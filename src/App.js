import { Route } from "react-router";
import MainHeader from "./components/MainHeader";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Welcome from "./pages/welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
