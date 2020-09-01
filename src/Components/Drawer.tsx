import React from "react";
import styled from "styled-components";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import PieChartIcon from "@material-ui/icons/PieChart";
import NavigationIcon from "@material-ui/icons/Navigation";
import PeopleIcon from "@material-ui/icons/People";
import BackupIcon from "@material-ui/icons/Backup";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import TransitEnterexitOutlinedIcon from "@material-ui/icons/TransitEnterexitOutlined";
import { green, grey } from "@material-ui/core/colors";
import Logo from "../Assets/logo.png";

interface Line {
  icon?: boolean;
}
const Container = styled.div`
  top: 0px;
  left: 0px;
  width: 71px;
   background: #1a1731 0% 0% no-repeat padding-box; */
`;

const Line = styled.div`
  width: ${(props: Line) => (props?.icon ? 30 : 71)};
  height: 3px;
  background: transparent linear-gradient(90deg, #00e1ff 0%, #117eff 100%) 0% 0%
    no-repeat padding-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const D1Logo = styled.img`
  width: 40px;
  height: 30px;
  padding-top: 35px;
`;

const ListPages = styled.ul`
  padding-top: 60px;
`;
const ListItem = styled.li`
  margin-bottom: 10px;
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  &:hover {
    color: #117eff;
  }
`;
const DrawerLeft: React.FC = () => {
  return (
    <Container>
      <Line></Line>
      <Wrapper>
        <D1Logo src={Logo} />
        <ListPages>
          <ListItem>
            <DataContainer>
              <PieChartIcon />
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <NavigationIcon />
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <PeopleIcon />
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <BackupIcon />
            </DataContainer>
          </ListItem>
          <ListItem>
            <Line icon />
          </ListItem>
          <ListItem>
            <DataContainer>
              <TransitEnterexitOutlinedIcon />
            </DataContainer>
          </ListItem>
        </ListPages>

        <ListPages>
          <ListItem>
            <DataContainer>
              <MonetizationOnOutlinedIcon />
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <SettingsOutlinedIcon />
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <AccessAlarmIcon />
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <CompareArrowsIcon />
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <ExitToAppIcon />
            </DataContainer>
          </ListItem>
        </ListPages>
      </Wrapper>
    </Container>
  );
};

export default DrawerLeft;
