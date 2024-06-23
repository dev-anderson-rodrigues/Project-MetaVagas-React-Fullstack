import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../Styles/AppStyles";

const Home = () => {
  return (
    <>
      <Container height="10vh">
        <h1>
          <Link to="/">Voltar</Link>
        </h1>
      </Container>
      <Container height="90vh">
        <h1>Div1</h1>
      </Container>
      <Container bgcolor="#ffff" height="70vh">
        <h1>div2</h1>
      </Container>
      <Container height="30vh">
        <h1>div3</h1>
      </Container>
    </>
  );
};

export default Home;
