import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import Materialize from "materialize-css";

const Signin = () => {
  const { dispatch } = useContext(UserContext);

  const histosy = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const PostData = () => {
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(email)) {
      Materialize.toast({
        html: "Invalid Email",
        classes: "#e53935 red darken-1",
      });
      return;
    }

    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          Materialize.toast({
            html: data.error,
            classes: "#e53935 red darken-1",
          });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          dispatch({ type: "USER", payload: data.user });

          Materialize.toast({
            html: "Signed in successfully!",
            classes: "#43a047 green darken-1",
          });
          histosy.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // <h1> Signin </h1>
    <div className="signInCard">
      <div className="card">
        <h1> Sign In </h1>
        <input
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="waves-effect waves-light btn"
          onClick={() => PostData()}
        >
          Sign In
        </button>
        <h6 className="alreadyHaveAnAccount">
          {" "}
          <Link to="/signup"> Don't have an account? </Link>{" "}
        </h6>
      </div>
    </div>
  );
};
export default Signin;
