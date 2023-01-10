import { Switch,Route,Redirect} from "react-router-dom";
import { Fragment,useEffect} from "react";
import Header from "./components/Header";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Mailbox from "./pages/Mailbox";
import Inbox from "./pages/Inbox";
import Compose from "./pages/Compose";

import Sent from "./pages/Sent";
import InboxView from "./pages/InboxView";
import SentView from "./pages/SentView";
import { useDispatch,useSelector } from "react-redux";
import { fetchReceivedMail, fetchSentMail } from "./store/composeActions";
function App() {
  const isLogin = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() =>{
   setInterval(() =>{
    dispatch(fetchReceivedMail());
    dispatch(fetchSentMail());
   },2000);
  },[dispatch]);
  
  return (
    <Fragment>
      <Header />
      <Switch>
     {!isLogin && <Route path = '/' exact>
      <Login />
      </Route>}
      {isLogin && <Route path='/' exact> 
      <Redirect to='/welcome' /></Route>}
      { isLogin && (<><Route path = '/welcome' exact>
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
      <Route path = '/send' exact>
        <Mailbox />
        <Sent />
      </Route> 
      <Route path = '/send/:email' >
        <Mailbox/>
        <SentView/>
      </Route> </>)}
     
      </Switch>
    </Fragment>
  );
}

export default App;
