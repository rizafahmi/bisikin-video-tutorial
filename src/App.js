import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./pages/Main.js";
import Detail from "./pages/Detail.js";
import Register from "./pages/Register.js";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/feedback/:id">
          <Detail />
        </Route>
        <Route path="/register" component={Register} />
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
