import React from "react";
import { Button, Container } from "../../Styles/AppStyles";

export const Header = () => {
  return (
    <Container className="header">
      <Container className="logoHeader">
        <h1>
          meta<span>vagas</span>
        </h1>
      </Container>
      <Container className="buttonsHeader">
        <Button className="buttonEntrar">Entrar</Button>
        <Button className="buttonCadastrar">Cadastre-se gratuitamente</Button>
      </Container>
    </Container>
  );
};
