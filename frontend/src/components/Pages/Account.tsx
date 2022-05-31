import React, { useContext, useEffect } from "react";
import { userContext } from "../../context/UserContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const context = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user-info") || "{}");
    context?.setLoggedInUser({
      jwt: userData.jwt,
      username: userData.user.username,
      email: userData.user.email,
      id: userData.user.id,
    });
    console.log(context?.loggedInUser);
  }, []);

  const handleLogout = async () => {
    localStorage.clear();
    context?.setLoggedIn(false);
    navigate("/");
  };

  const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15rem;
    margin-top: 50px;
  `;
  const StyledForm = styled.form`
    max-width: 800px;
    display: flex;
    flex-direction: column;
  `;

  return (
    <FlexContainer>
      <h1>Welcome back {context?.loggedInUser?.username}</h1>
      <StyledForm>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          defaultValue={context?.loggedInUser?.username}
          disabled
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          defaultValue={context?.loggedInUser?.email}
          disabled
        />
      </StyledForm>
      <button onClick={handleLogout}>Logout</button>
    </FlexContainer>
  );
};

export default Account;
