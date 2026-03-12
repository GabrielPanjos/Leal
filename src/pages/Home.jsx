import MainTemplate from "../templates/MainTemplate";
import Button from "../components/Button";
import Tittle from "../components/Title";
import ViewCard from "../components/ViewCard";
import Container from "../components/Container";
import SubTittle from "../components/SubTitle";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <MainTemplate>
      <Container>
        <ViewCard>Produtor/Dj, São Paulo SP</ViewCard>
        <Tittle>POR TRÁS DE CADA BATIDA NASCE UM NOVO SOM</Tittle>
        <div>
          <SubTittle>
            Explorando o processo criativo da produção musical
          </SubTittle>
          <SubTittle>Transformando ideias em som</SubTittle>
        </div>
        <Link to={"/sobre"}>
          <Button>Sobre mim</Button>
        </Link>
      </Container>
    </MainTemplate>
  );
}
