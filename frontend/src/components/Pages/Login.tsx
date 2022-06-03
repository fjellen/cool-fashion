import styled from "styled-components";
import React, { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { strapiClient } from "../../utils/strapiClient";
import { userContext } from "../../context/UserContext";
import Image from "../Pages/jordan-mcqueen-88XM5Al3AXg-unsplash.jpg"


const BackgroundImage = styled.img`
  position: fixed;
  height: 100%;
  width: 100%;
  object-fit: cover;
  
  z-index: -1
`


const FlexContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
 
  margin: 1rem;
  padding: 15rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: block;
  background-color: white;

  
  padding: 3rem;
`;

const Input = styled.input`
  color: #fff;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  outline: none;
  width: 95%;
 
  padding: 1em;
  border: 1px solid black;
  border-radius: 3px;
  
  ::placeholder {
    color: grey;
    font-size: 1rem;
  }
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

const FormContainer = styled.div`

`;

const BackgroundHolder = styled.div`
background-color: white;
`

const Login = () => {
  const context = useContext(userContext);
  const navigate = useNavigate();
  const emailRef = React.useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errorMsg, setErrorMsg] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    setErrorMsg(null);
    e.preventDefault();
    try {
      const response = await strapiClient("/api/auth/local", "POST", {
        identifier: emailRef?.current?.value,
        password: passwordRef?.current?.value,
      });
      if (!response.user) {
        throw "Cannot login. Please try again.";
      } else {
        context?.setLoggedIn(true);
        navigate("/Account");
        localStorage.setItem("user-info", JSON.stringify(response));
      }
    } catch (err: any) {
      setErrorMsg(err);
    }
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
                
                fontFamily: "montserrat",
              }}
            >
              Welcome back
            </h2>
            <p style={{textAlign: "center"}}>Please login to access your account</p>
              <Input
                ref={emailRef}
                type="text"
                placeholder="Email"
                name="email"
              />
             
              <Input
                ref={passwordRef}
                type="password"
                placeholder=" Password"
                name="password"
              />

              <Button type="submit">Sign In</Button>
              {errorMsg && <p style={{ color: "#ff0000" }}>{errorMsg}</p>}

              <p
              style={{
                paddingTop: "2rem",
                textAlign: "center",
                textDecoration: "none",
                borderTop: "1px solid black",
            
              }}
            >
              Dont have an account? <Link  to="/register">Register</Link>
            </p>
            </Form>
          </Container>
        </FormContainer>
       
      </FlexContainer>
      
    </>
  );
};

export default Login;
