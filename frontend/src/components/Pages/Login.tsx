import styled from "styled-components";
import React, { useContext, useRef } from "react";
import { userContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { strapiClient } from "../../utils/strapiClient";

const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 500px;
  margin: 1rem;
  padding: 2em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: block;
`;

const Input = styled.input`
  color: #fff;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 500px;
  outline: none;
  padding-left: 10px;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border: none;
  border-radius: 3px;
  background: #292929;
  ::placeholder {
    color: #d3d3d3;
  }
`;

const Button = styled.button`
  margin-top: 2rem;
  width: 100%;
  background: #303030;
  border: none;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: lighter;
  cursor: pointer;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  border-radius: 3px;
  color: #d3d3d3;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Login = () => {
  const context = useContext(userContext);
  const navigate = useNavigate();

  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(e);
    e.preventDefault();
    const user = context?.user;

    const response = await strapiClient("/api/auth/local", "POST", {
      identifier: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    }).then((data) => {
      console.log(data);
      if (data.data === null) {
        console.log("Something went wrong");
      } else {
        navigate("/Account");
        localStorage.setItem("user-info", JSON.stringify(data));
      }
    });
  };

  //   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     context?.setRegisterUser({
  //       ...context.user!,
  //       [e.target.name]: e.target.value,
  //     });
  //     console.log(context?.user);
  //   };

  return (
    <>
      <FlexContainer>
        <FormContainer>
          <Container>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "0.5rem",
                fontFamily: "montserrat",
              }}
            >
              Welcome back
            </h2>
            <p
              style={{
                textAlign: "center",
                textDecoration: "none",
                marginBottom: "1rem",
              }}
            >
              Dont have an account? <Link to="/register">Register</Link>
            </p>

            <Form onSubmit={handleSubmit}>
              <label style={{ marginTop: "1rem" }}>Email</label>
              <Input
                ref={emailRef}
                type="text"
                placeholder="Enter Email"
                name="email"
                onChange={() => console.log(emailRef?.current?.value)}
              />
              <label style={{ marginTop: "1rem" }}>Password</label>
              <Input
                ref={passwordRef}
                type="password"
                placeholder=" Enter A Password"
                name="password"
              />

              <Button type="submit">Login</Button>
            </Form>
          </Container>
        </FormContainer>
      </FlexContainer>
    </>
  );
};

export default Login;
