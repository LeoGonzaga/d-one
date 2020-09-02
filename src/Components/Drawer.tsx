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
import Tooltip from "@material-ui/core/Tooltip";
import Logo from "../Assets/logo.png";

import { withStyles, Theme, makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: grey[50],
    color: "rgba(1, 0, 0, 0.5)",
    fontWeight: "bold",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    padding: 10,
  },
}))(Tooltip);

interface Line {
  icon?: boolean;
}
const Container = styled.div`
  top: 0px;
  left: 0px;
  width: 71px;
  background: #1a1731;
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
  @media (max-width: 800px) {
    display: none;
  }
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
  margin-bottom: 20px;
`;

const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  transition: 0.4;
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
              <LightTooltip title="Análises" placement="left" arrow>
                <PieChartIcon />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Jornadas" placement="left" arrow>
                <NavigationIcon />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Clientes" placement="left" arrow>
                <PeopleIcon />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="CCM Cloud" placement="left" arrow>
                <BackupIcon />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <Line icon />
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Versão 01" placement="left" arrow>
                <TransitEnterexitOutlinedIcon />
              </LightTooltip>
            </DataContainer>
          </ListItem>
        </ListPages>

        <ListPages>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Administração" placement="left" arrow>
                <MonetizationOnOutlinedIcon />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Help Desk" placement="left" arrow>
                <SettingsOutlinedIcon />
              </LightTooltip>
            </DataContainer>
          </ListItem>

          <ListItem>
            <DataContainer>
              <LightTooltip title="Trocar Conta" placement="left" arrow>
                <CompareArrowsIcon />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Sair" placement="left" arrow>
                <ExitToAppIcon />
              </LightTooltip>
            </DataContainer>
          </ListItem>
        </ListPages>
      </Wrapper>
    </Container>
  );
};

export default DrawerLeft;
