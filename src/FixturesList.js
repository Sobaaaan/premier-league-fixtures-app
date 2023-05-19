import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FixturesContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const FixturesHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FixtureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FixtureItem = styled.li`
  margin-bottom: 8px;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const FixtureTeams = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const FixtureTeamName = styled.span`
  color: #333;
`;

const FixturesList = () => {
    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {
        fetchFixtures();
    }, []);

    const fetchFixtures = async () => {
        const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2022";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setFixtures(result.response);
        } catch (error) {
            console.error("Error fetching fixtures:", error);
        }
    };

    return (
        <FixturesContainer>
            <FixturesHeader>Premier League Fixtures</FixturesHeader>
            <FixtureList>
                {fixtures.map((fixture) => (
                    <FixtureItem key={fixture.fixture.id}>
                        <FixtureTeams>
                            <FixtureTeamName>{fixture.teams.home.name}</FixtureTeamName>
                            <span>vs</span>
                            <FixtureTeamName>{fixture.teams.away.name}</FixtureTeamName>
                        </FixtureTeams>
                    </FixtureItem>
                ))}
            </FixtureList>
        </FixturesContainer>
    );
};

export default FixturesList;
