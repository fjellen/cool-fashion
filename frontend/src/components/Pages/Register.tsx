import React, { useContext } from "react";
import { userContext } from "../../context/UserContext";
import { strapiClient } from "../../utils/strapiClient";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const context = useContext(userContext);
  const navigate = useNavigate();
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = React.useRef<HTMLInputElement | null>(null);
  const usernameRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await strapiClient("/api/auth/local/register", "POST", {
      username: usernameRef?.current?.value,
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    });
    localStorage.clear();
    localStorage.setItem("user-info", JSON.stringify(response));
    context?.setLoggedInUser({
      jwt: response.jwt,
      username: response.user.username,
      email: response.user.email,
      id: response.user.id,
    });
    context?.setLoggedIn(true);
    navigate("/Account");
  };
  return (
    <div
      style={{ display: "flex", justifyContent: "center", padding: "15rem" }}
    >
      <form onSubmit={handleSubmit}>
        <input
          ref={usernameRef}
          onChange={() => console.log(usernameRef.current?.value)}
          type="text"
          placeholder="username"
        />
        <input ref={emailRef} type="email" placeholder="email" />
        <input
          ref={passwordRef}
          onChange={() => console.log(passwordRef.current?.value)}
          type="password"
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
