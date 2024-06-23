import React from "react";
import { Container } from "../../Styles/AppStyles";
import iconPerfil from "../../icons/Vector.png";
import iconContato from "../../icons/Vector2.png";
import Login from "../Login/Login";

const ContainerPrimary = () => {
  return (
    <Container className="Container_Primary">
      <Container className="Container_Left">
        <p>CADASTRE-SE</p>
        <h2>Fique por dentro de todas as vagas</h2>
        <p>
          <img src={iconPerfil} alt="" />
          Com um único cadastro você consegue encontrar sua vaga
        </p>
        <p>
          <img src={iconContato} alt="" />
          Receba alertas sobre as vagas que você procura
        </p>
      </Container>
      <Container className="Container_Right">
        <Login />
      </Container>
    </Container>
  );
};

export default ContainerPrimary;
