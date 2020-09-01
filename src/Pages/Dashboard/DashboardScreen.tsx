import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Navbar from "../../Components/NavBar";
import DashItem, { Card } from "./Components/DashItem/DashItem";

const Container = styled.div`
  flex: 1;
`;

const RowContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 90%;
  justify-content: space-between;
  align-items: flex-start;
  margin: 39px auto;
  padding: 50px;
`;

const JourneyContainer = styled.div``;

const DashContainer = styled.div`
  width: 70%;
  height: 500px;
  overflow-y: scroll;
`;

const LabelContainer = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  margin: 10px;
`;

const Dashboard: React.FC = () => {
  const [allJouneys, setAllJouney] = useState([]);
  const getAllJourneys = useCallback(async () => {
    try {
      let res = await fetch(`https://api-d1-test.herokuapp.com/api/journey/`);
      let resJSON = await res.json();
      console.log(resJSON);
      setAllJouney(resJSON);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getAllJourneys();
  }, []);

  return (
    <Container>
      <Navbar />
      <RowContainer>
        <JourneyContainer>
          <h4>Jornadas</h4>
          <ul>
            <li>ALo</li>
            <li>ALo</li>
            <li>ALo</li>
            <li>ALo</li>
            <li>ALo</li>
          </ul>
        </JourneyContainer>
        <DashContainer>
          <LabelContainer>
            <li>Nome</li>
            <li>Destinatário</li>
            <li>Sucesso</li>
            <li>Status</li>
          </LabelContainer>
          {allJouneys.map((item: Card) => (
            <DashItem
              key={item.id}
              name={item?.name}
              recipients={item?.recipients}
              success={item?.success}
              status={item?.status}
            />
          ))}
        </DashContainer>
      </RowContainer>
    </Container>
  );
};

export default Dashboard;
