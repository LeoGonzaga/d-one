import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import Navbar from "../../Components/NavBar";
import DashItem, { Card } from "./Components/DashItem/DashItem";
import BorderAllOutlinedIcon from "@material-ui/icons/BorderAllOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import { purple, yellow, grey, blue, green } from "@material-ui/core/colors";
const Container = styled.div`
  flex: 1;
  height: 100vh;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const RowContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 90%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px 50px;
  @media (max-width: 800px) {
    padding: 10;
  }
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

const ContainerName = styled.div`
  flex: 0.4;
`;
const ContainerItem = styled.div`
  display: flex;
  flex: 0.6;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
`;

const ItemIcon = styled.div`
  width: 140px;
  display: flex;
  justify-content: center;
`;

const TitleFilter = styled.h2`
  color: #3e4157;
  text-align: left;
`;

const FilterContainer = styled.ul`
  padding: 10px;
  width: 15vw;
  @media (max-width: 800px) {
    padding: 10;
  }
`;
const FilterItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  width: 15vw;

  &:focus {
    border: none;
    outline: none;
    font-weight: bold;
  }
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    justify-content: space-between;
    margin-right: 20px;
  }
`;
const Total = styled.div`
  height: 30px;
  width: 30px;
  background-color: #e4e6f1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  &:hover {
    background-color: #117eff;
  }
`;

const Text = styled.span`
  color: #3e4157;
  margin-left: 5px;
  font-size: 17px;
  &:hover {
    color: #9196ab;
  }
`;

const Number = styled.span`
  color: #9196ab;
`;

const Dashboard: React.FC = () => {
  const [allJouneys, setAllJouney] = useState([]);
  const [filter, setFilter] = useState([]);
  const getAllJourneys = useCallback(async () => {
    try {
      let res = await fetch(`https://api-d1-test.herokuapp.com/api/journey/`);
      let resJSON = await res.json();
      // console.log(resJSON);
      setAllJouney(resJSON);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getFilter = useCallback(async () => {
    try {
      let res = await fetch(`https://api-d1-test.herokuapp.com/api/filter`);
      let resJSON = await res.json();
      // console.log(resJSON);
      setFilter(resJSON);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const filterResults = useCallback(async (id) => {
    try {
      if (id == 0) {
        getAllJourneys();
        return;
      }
      let res = await fetch(
        `https://api-d1-test.herokuapp.com/api/journey/${id}`
      );
      let resJSON = await res.json();
      // console.log("Filter", resJSON);
      setAllJouney(resJSON);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const icons = useCallback((id: number) => {
    switch (id) {
      case 0:
        return <BorderAllOutlinedIcon style={{ color: purple[300] }} />;
      case 1:
        return <SendOutlinedIcon style={{ color: yellow[200] }} />;
      case 2:
        return (
          <PlayCircleFilledWhiteOutlinedIcon style={{ color: green[200] }} />
        );
      case 3:
        return <CreateOutlinedIcon style={{ color: blue[200] }} />;
      case 4:
        return <KingBedOutlinedIcon style={{ color: yellow[600] }} />;
      case 5:
        return <CheckOutlinedIcon style={{ color: grey[400] }} />;

      default:
        break;
    }
  }, []);

  useEffect(() => {
    getAllJourneys();
    getFilter();
  }, []);

  return (
    <Container>
      <Navbar />
      <RowContainer>
        <JourneyContainer>
          <TitleFilter>Jornadas</TitleFilter>
          <FilterContainer>
            {filter.map((item: any) => (
              <FilterItem key={item.id} onClick={() => filterResults(item.id)}>
                <DataContainer>
                  {icons(item.id)}
                  <Text>{item.name}</Text>
                </DataContainer>
                <Total>
                  <Number>{item.quantity}</Number>
                </Total>
              </FilterItem>
            ))}
          </FilterContainer>
        </JourneyContainer>

        <DashContainer>
          <LabelContainer>
            <ContainerName>
              <li>Nome</li>
            </ContainerName>
            <ContainerItem>
              <Item>
                <li>Destinatário</li>
              </Item>
              <Item>
                <li>Sucesso</li>
              </Item>
              <ItemIcon>
                <li>Status</li>
              </ItemIcon>
            </ContainerItem>
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
