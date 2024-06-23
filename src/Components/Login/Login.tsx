/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button, Container } from "../../Styles/AppStyles";

const Login = () => {
  const [isPage, setPage] = React.useState(false);
  const handleClick = (e: any) => {
    e.preventDefault();
    setPage(!isPage);
  };
  return (
    <Container className="Login">
      {isPage ? <h3>Faça seu login</h3> : <h3>Faça seu cadastro</h3>}
      <Container className="div_input">
        <label>Seu e-mail</label>
        <input type="email" placeholder="ana@gmail.com" />
      </Container>
      <Container className="div_input">
        <label>Sua Senha</label>
        <input type="password" placeholder="**************" />
      </Container>
      {!isPage && (
        <Container className="div_input">
          <label>Confirme sua Senha</label>
          <input type="password" placeholder="**************" />
        </Container>
      )}
      <Container className="div_button">
        {isPage ? (
          <Button className="buttonCadastrar">Entrar</Button>
        ) : (
          <Button className="buttonCadastrar">Cadastrar</Button>
        )}
      </Container>
      <Container className="tag_link">
        <a href="#" onClick={handleClick}>
          {isPage ? (
            <p>
              Não é cadastrado?
              <span>Cadastre-se</span>
            </p>
          ) : (
            <p>
              Já é cadastrado
              <span>Faça o login</span>
            </p>
          )}
        </a>
      </Container>
    </Container>
  );
};

export default Login;
