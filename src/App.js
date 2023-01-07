import { Switch,Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Mailbox from "./pages/Mailbox";
import Compose from "./pages/Compose";
function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
      <Route path = '/' exact>
      <Login />
      </Route>
      <Route path = '/welcome' exact>
        <Welcome />
      </Route>
      <Route path = '/mailbox' exact>
        <Mailbox />
      </Route>
      <Route path = '/compose' exact>
        <Mailbox />
        <Compose />
      </Route>
     
      </Switch>
    </Fragment>
  );
}

export default App;
