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
        return "Enviado";
      case 2:
        return "Configurando";
      case 3:
        return "Ociosa";
      default:
        break;
    }
  }, []);

  return (
    <Container>
      <h3>{props?.name}</h3>
      <span>{props?.recipients}</span>
      <span>{props?.success}</span>
      <span>{statusItem()}</span>
    </Container>
  );
};

export default DashItem;
