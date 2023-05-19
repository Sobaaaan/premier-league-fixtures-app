import React from "react";
import styled from "styled-components";
import FixturesList from "./FixturesList";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

const AppHeader = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const App = () => {
  return (
    <AppContainer>
      <AppHeader>Premier League Fixtures App</AppHeader>
      <FixturesList />
    </AppContainer>
  );
};

export default App;
