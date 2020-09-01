import React from "react";
import styled from "styled-components";
import Navbar from "../../Components/NavBar";

const Container = styled.div`
  flex: 1;
`;
const Dashboard: React.FC = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

export default Dashboard;
