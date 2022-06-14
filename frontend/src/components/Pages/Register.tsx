import React, { useContext } from "react";
import { userContext } from "../../context/UserContext";
import { strapiClient } from "../../utils/strapiClient";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Image from "../Pages/jordan-mcqueen-88XM5Al3AXg-unsplash.jpg";
import { Link } from "react-router-dom";

const Input = styled.input`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  outline: none;
  width: 100%;

  padding: 1em;
  border: 1px solid black;
  border-radius: 3px;

  ::placeholder {
    color: grey;
    font-size: 1rem;
  }
`;

const Form = styled.form`
  display: block;
  background-color: white;
  padding: 3rem;
`;
const Button = styled.button`
  margin-top: 1rem;
  width: 100%;
  background: #303030;
  border: none;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: lighter;
  cursor: pointer;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  border-radius: 3px;
  color: #d3d3d3;
`;

const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Container = styled.div`
  margin: 1rem;
  padding: 15rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div``;

const BackgroundImage = styled.img`
  position: fixed;
  height: 100%;
  width: 100%;
  object-fit: cover;

  z-index: -1;
`;

const NoAccount = styled.p`
  text-align: center;
  border-top: 1px solid black;
  margin-top: 1rem;
  padding-top: 1rem;
`;

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
    <>
      <BackgroundImage src={Image}></BackgroundImage>
      <FlexContainer>
        <FormContainer>
          <Container>
            <Form onSubmit={handleSubmit}>
              <h2
                style={{
                  textAlign: "center",

                  fontFamily: "inherit",
                }}
              >
                Register
              </h2>
              <p style={{ textAlign: "center" }}>
                Please register your account
              </p>
              <Input
                ref={usernameRef}
                onChange={() => console.log(usernameRef.current?.value)}
                type="text"
                placeholder="Username"
              />
              <Input ref={emailRef} type="email" placeholder="Email" />

              <Input
                ref={passwordRef}
                onChange={() => console.log(passwordRef.current?.value)}
                type="password"
                placeholder="Password"
              />
              <Button type="submit">Submit</Button>
              <NoAccount>
                Already have an account? <Link to="/login">Login</Link>
              </NoAccount>
            </Form>
          </Container>
        </FormContainer>
      </FlexContainer>
    </>
  );
};

export default Register;
