import { Switch,Route } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Mailbox from "./pages/Mailbox";
import Inbox from "./pages/Inbox";
import Compose from "./pages/Compose";

import Sent from "./pages/Sent";
import InboxView from "./pages/InboxView";
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
      <Route path = '/inbox' exact>
        <Mailbox />
        <Inbox />
      </Route>
      <Route path='/inbox/:email'>
        <Mailbox/>
        <InboxView />
      </Route>
       <Route path = '/compose' exact>
        <Mailbox />
        <Compose />
      </Route>
      <Route path = '/sent' exact>
        <Mailbox />
        <Sent />
      </Route> 
     
      </Switch>
    </Fragment>
  );
}

export default App;
