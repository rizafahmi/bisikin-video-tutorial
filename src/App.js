import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Switch,
} from "react-router-dom";
import { useEffect, useState } from "react";

import qoreContext from "./qoreContext.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./pages/Main.js";
import Detail from "./pages/Detail.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const { user } = qoreContext.useCurrentUser();
  const history = useHistory();

  useEffect(
    function () {
      console.log("useEffect");
      setCurrentUser(user);
    },
    [user, history]
  );

  return (
    <Router>
      <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>
        <Route path="/feedback/:id">
          <Detail />
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/">
          <Main currentUser={currentUser} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
