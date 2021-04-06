import { useState } from "react";
import { useHistory } from "react-router-dom";
import qoreContext from "../qoreContext.js";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { insertRow } = qoreContext.view("allMember").useInsertRow();
  const history = useHistory();

  async function handleRegistration(event) {
    event.preventDefault();
    if (password === confirmPassword) {
      await insertRow({
        fullname: name,
        email: email,
        password: password,
        role: "KiwTfjHT4T5sEsI",
      });
      history.push("/");
    }
  }

  return (
    <div className="authbox">
      <div className="authbox-header">
        <h2>Registrasi Akun Baru</h2>
      </div>

      <div className="authbox-container-form">
        <div className="authbox-container-form-inner">
          <form method="POST" onSubmit={handleRegistration}>
            <div>
              <label htmlFor="fullname">Nama</label>
              <div className="authbox-form-element">
                <input
                  type="text"
                  name="fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
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
              <label htmlFor="confirmpassword">Konfirmasi Password</label>
              <div className="authbox-form-element">
                <input
                  type="password"
                  name="confirmpassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
