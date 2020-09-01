import React from "react";
import styled from "styled-components";

import LogoImg from "../Assets/acme2.png";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles, Theme, makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const DarkTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: "rgb(67, 63, 89)",
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: "bold",
    boxShadow: theme.shadows[1],
    fontSize: 15,
    padding: 10,
  },
}))(Tooltip);
export const Container = styled.div`
  display: flex;
  flex: 1;
  max-width: 90%;
  align-items: center;
  justify-content: space-between;
  margin: 39px auto;
`;

const Infos = styled.div`
  display: flex;
  background-size: cover;
  align-items: center;
`;
const NameContainer = styled.div`
  display: flex;
  background-color: #117eff;
  height: 30px;
  width: 30px;
  margin-right: 20px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;
const Name = styled.span`
  color: #fff;
`;
const LogoContainer = styled.div`
  background: #fff;
  border: 1px solid #ebeef6;
  padding: 0 10px;
  height: 35px;
`;
const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const Action = styled.div``;
const Search = styled.input`
  width: 296px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccfde;

  &:hover {
    box-shadow: 5px 5px 10px #cccfde;
  }
`;
const Button = styled.button`
  background-color: #117eff;
  padding: 11px;
  margin: 0 10px;
  border-radius: 5px;
  border: none;
  color: #fff;
  transition: 0.1s;
  &:hover {
    background-image: linear-gradient(to left, #25aae1, #00e1ff);
  }
`;
const Navbar: React.FC = () => {
  return (
    <Container>
      <Infos>
        <NameContainer>
          <DarkTooltip placement="left-end" title="Antônio da Silva" arrow>
            <Name>A</Name>
          </DarkTooltip>
        </NameContainer>
        <LogoContainer>
          <Logo src={LogoImg} />
        </LogoContainer>
      </Infos>

      <Action>
        <Search placeholder="Buscar" />
        <Button>
          + <span>Nova Jornada</span>
        </Button>
      </Action>
    </Container>
  );
};

export default Navbar;
