import React, { useCallback } from "react";
import styled from "styled-components";

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
`;

export interface Card {
  id?: string;
  name: string;
  success?: string;
  recipients?: string;
  status?: number;
}

const DashItem: React.FC<Card> = (props) => {
  const statusItem = useCallback(() => {
    switch (props.status) {
      case 1:
        return "Em execução";
      case 2:
        return "Ativa";
      case 3:
        return "Configurando";
      case 4:
        return "Ociosa";
      case 5:
        return "Concluida";
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
        <Item>
          <Text>{statusItem()}</Text>
        </Item>
      </ContainerItem>
    </Container>
  );
};

export default DashItem;
