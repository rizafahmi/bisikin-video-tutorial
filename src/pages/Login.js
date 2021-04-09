import { useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext.js";
import Cookies from "js-cookie";

function Login({ currentUser, setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const client = qoreContext.useClient();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const token = await client.authenticate(email, password);
      Cookies.set("token", token);
      const user = await client.currentUser();
      setCurrentUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="authbox">
      <div className="authbox-header">
        <h2>Login</h2>
      </div>

      <div className="authbox-container-form">
        <div className="authbox-container-form-inner">
          <form method="POST" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email</label>
              <div className="authbox-form-element">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div className="authbox-form-element">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
