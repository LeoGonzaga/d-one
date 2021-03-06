import React, { useCallback } from "react";
import styled from "styled-components";
import BorderAllOutlinedIcon from "@material-ui/icons/BorderAllOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";
import { purple, yellow, grey, blue, green } from "@material-ui/core/colors";
const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  margin: 10px;
`;

const ContainerName = styled.div`
  display: flex;
  flex: 0.4;
`;

const Name = styled.h4`
  color: #3e4157;
  font-family: "Gotham-Bold";
`;
const ContainerItem = styled.div`
  display: flex;
  flex: 0.6;
  justify-content: space-between;
`;

const Item = styled.div`
  width: 100px;
  display: flex;
  opacity: 0.6;
  justify-content: center;
`;

const Text = styled.span`
  color: #3e4157;
  margin-left: 10px;
`;

const ItemIcon = styled.div`
  width: 140px;
  display: flex;
  opacity: 0.6;
  text-align: left;
  align-items: center;
`;

export interface Card {
  id?: string;
  name: string;
  success?: string;
  recipients?: string;
  status?: number;
}

const DashItem: React.FC<Card> = (props) => {
  const icons = useCallback((id: any) => {
    switch (id) {
      case 0:
        return (
          <ItemIcon>
            <BorderAllOutlinedIcon style={{ color: purple[300] }} />{" "}
            <Text>Em execução</Text>
          </ItemIcon>
        );
      case 1:
        return (
          <ItemIcon>
            <SendOutlinedIcon style={{ color: yellow[200] }} />
            <Text>Ativa</Text>
          </ItemIcon>
        );
      case 2:
        return (
          <ItemIcon>
            <PlayCircleFilledWhiteOutlinedIcon style={{ color: green[200] }} />
            <Text>Ativa</Text>
          </ItemIcon>
        );
      case 3:
        return (
          <ItemIcon>
            <CreateOutlinedIcon style={{ color: blue[200] }} />
            <Text>Configurando</Text>
          </ItemIcon>
        );
      case 4:
        return (
          <ItemIcon>
            <KingBedOutlinedIcon style={{ color: yellow[600] }} />
            <Text>Ociosa</Text>
          </ItemIcon>
        );
      case 5:
        return (
          <ItemIcon>
            <CheckOutlinedIcon style={{ color: grey[400] }} />
            <Text>Concluida</Text>
          </ItemIcon>
        );

      default:
        break;
    }
  }, []);
  return (
    <Container>
      <ContainerName>
        <Name>{props?.name}</Name>
      </ContainerName>
      <ContainerItem>
        <Item>
          <Text>{props?.recipients}</Text>
        </Item>
        <Item>
          <Text>{props?.success}</Text>
        </Item>
        {icons(props.status)}
      </ContainerItem>
    </Container>
  );
};

export default DashItem;
