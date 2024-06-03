import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, NavBar, NavLink, Text } from "../../components";

const Navigation = () => {
  const navigate = useNavigate();

  const rightSection = () => {
    return (
      <>
        <Button onClick={() => navigate("/login")} small variant="outlined">
          Log in
        </Button>
        <Button onClick={() => navigate("/sign-up")} small variant="outlined">
          Sign up
        </Button>
      </>
    );
  };
  return (
    <NavBar logo={<Text bold>Fretter</Text>} rightSection={rightSection()}>
      <NavLink to="/" text="Home" />
    </NavBar>
  );
};

export default Navigation;
