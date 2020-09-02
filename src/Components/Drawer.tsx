import React from "react";
import styled from "styled-components";

import Tooltip from "@material-ui/core/Tooltip";
import Logo from "../Assets/assets-complete/images/logotipo-branco.png";

import { withStyles, Theme, makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import { ReactComponent as ChartPie } from "../Assets/assets-complete/icons/chart-pie.svg";
import { ReactComponent as Rocket } from "../Assets/assets-complete/icons/rocket.svg";
import { ReactComponent as UserFriends } from "../Assets/assets-complete/icons/user-friends.svg";
import { ReactComponent as CCM } from "../Assets/assets-complete/icons/ccm-cloud.svg";
import { ReactComponent as External } from "../Assets/assets-complete/icons/external-link-alt-solid.svg";
import { ReactComponent as Gem } from "../Assets/assets-complete/icons/gem.svg";
import { ReactComponent as Tools } from "../Assets/assets-complete/icons/tools.svg";
import { ReactComponent as Chance } from "../Assets/assets-complete/icons/exchange-alt.svg";
import { ReactComponent as Exit } from "../Assets/assets-complete/icons/sign-out-alt.svg";
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

const PieChartIcon = styled(ChartPie)`
  &:hover {
    fill: #117eff;
  }
`;

const RocketIcon = styled(Rocket)`
  &:hover {
    fill: #117eff;
  }
`;

const UserFriendsIcon = styled(UserFriends)`
  &:hover {
    fill: #117eff;
  }
`;

const CCMCloud = styled(CCM)`
  &:hover {
    fill: #117eff;
  }
`;

const ExternalIcon = styled(External)`
  &:hover {
    fill: #117eff;
  }
`;

const GemIcon = styled(Gem)`
  &:hover {
    fill: #117eff;
  }
`;

const ToolsIcon = styled(Tools)`
  &:hover {
    fill: #117eff;
  }
`;

const ChanceIcon = styled(Chance)`
  &:hover {
    fill: #117eff;
  }
`;

const ExitIcon = styled(Exit)`
  &:hover {
    fill: #117eff;
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
                <PieChartIcon fill="#fff" height="25" />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Jornadas" placement="left" arrow>
                <RocketIcon fill="#fff" height="25" />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Clientes" placement="left" arrow>
                <UserFriendsIcon fill="#fff" height="25" />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="CCM Cloud" placement="left" arrow>
                <CCMCloud fill="#fff" height="25" />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <Line icon />
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Versão 01" placement="left" arrow>
                <ExternalIcon fill="#fff" height="25" />
              </LightTooltip>
            </DataContainer>
          </ListItem>
        </ListPages>

        <ListPages>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Administração" placement="left" arrow>
                <GemIcon fill="#fff" height="25" />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Help Desk" placement="left" arrow>
                <ToolsIcon fill="#fff" height="25" />
              </LightTooltip>
            </DataContainer>
          </ListItem>

          <ListItem>
            <DataContainer>
              <LightTooltip title="Trocar Conta" placement="left" arrow>
                <ChanceIcon fill="#fff" height="25" />
              </LightTooltip>
            </DataContainer>
          </ListItem>
          <ListItem>
            <DataContainer>
              <LightTooltip title="Sair" placement="left" arrow>
                <ExitIcon fill="#fff" height="25" />
              </LightTooltip>
            </DataContainer>
          </ListItem>
        </ListPages>
      </Wrapper>
    </Container>
  );
};

export default DrawerLeft;
