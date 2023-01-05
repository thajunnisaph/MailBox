import { Switch,Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
      <Route path = '/' exact>
      <Login />
      </Route>
     
      </Switch>
    </Fragment>
  );
}

export default App;
