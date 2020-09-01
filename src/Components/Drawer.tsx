import React from "react";
import styled from "styled-components";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import Logo from "../Assets/logo.png";
const Container = styled.div`
  top: 0px;
  left: 0px;
  width: 71px;
  height: 768px;
  background: #1a1731 0% 0% no-repeat padding-box;
`;

const Line = styled.div`
  width: 71px;
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
const DrawerLeft: React.FC = () => {
  return (
    <>
      <Container>
        <Line></Line>
        <Wrapper>
          <D1Logo src={Logo} />
          <ListPages>
            <ListItem>
              <AccessAlarmIcon color="primary" />
            </ListItem>
            <ListItem>
              <AccessAlarmIcon color="primary" />
            </ListItem>
            <ListItem>
              <AccessAlarmIcon color="primary" />
            </ListItem>
            <ListItem>
              <AccessAlarmIcon color="primary" />
            </ListItem>
            <ListItem>
              <AccessAlarmIcon color="primary" />
            </ListItem>
            <ListItem>
              <AccessAlarmIcon color="primary" />
            </ListItem>
          </ListPages>

          <ListPages>
            <ListItem>
              <AccessAlarmIcon color="primary" />
            </ListItem>
            <ListItem>
              <AccessAlarmIcon color="primary" />
            </ListItem>
            <ListItem>
              <AccessAlarmIcon color="primary" />
            </ListItem>
            <ListItem>
              <AccessAlarmIcon color="primary" />
            </ListItem>
            <ListItem>
              <AccessAlarmIcon color="primary" />
            </ListItem>
          </ListPages>
        </Wrapper>
      </Container>
    </>
  );
};

export default DrawerLeft;
