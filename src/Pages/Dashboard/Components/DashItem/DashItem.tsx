import React, { useCallback } from "react";
import styled from "styled-components";
import BorderAllOutlinedIcon from "@material-ui/icons/BorderAllOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import CheckOutlinedIcon from "@material-ui/icons/CheckOutlined";

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

const Text = styled.span`
  color: #3e4157;
  margin-left: 10px;
`;

const ItemIcon = styled.div`
  width: 140px;
  display: flex;
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
            <BorderAllOutlinedIcon /> <Text>Em execução</Text>
          </ItemIcon>
        );
      case 1:
        return (
          <ItemIcon>
            <SendOutlinedIcon />
            <Text>Ativa</Text>
          </ItemIcon>
        );
      case 2:
        return (
          <ItemIcon>
            <PlayCircleFilledWhiteOutlinedIcon />
            <Text>Ativa</Text>
          </ItemIcon>
        );
      case 3:
        return (
          <ItemIcon>
            <CreateOutlinedIcon />
            <Text>Configurando</Text>
          </ItemIcon>
        );
      case 4:
        return (
          <ItemIcon>
            <KingBedOutlinedIcon />
            <Text>Ociosa</Text>
          </ItemIcon>
        );
      case 5:
        return (
          <ItemIcon>
            <CheckOutlinedIcon />
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
