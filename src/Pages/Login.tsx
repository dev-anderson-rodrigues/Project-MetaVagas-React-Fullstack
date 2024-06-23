import { Container } from "../Styles/AppStyles";
import { Header } from "../Components/Header/Header";
import ContainerPrimary from "../Components/ContainerPrimary/ContainerPrimary";

const Login = () => {
  return (
    <>
      <Container height="10vh">
        <Header />
      </Container>
      <Container height="90vh">
        <ContainerPrimary />
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

export default Login;
