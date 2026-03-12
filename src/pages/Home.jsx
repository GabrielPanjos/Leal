import MainTemplate from "../templates/MainTemplate";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import ViewCard from "../components/ViewCard";
import Container from "../components/Container";
import PageSubTitle from "../components/PageSubTitle";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <MainTemplate>
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Container h={"h-220"} gap={"gap-8"}>
            <ViewCard>Produtor/Dj, São Paulo SP</ViewCard>
            <PageTitle>POR TRÁS DE CADA BATIDA NASCE UM NOVO SOM</PageTitle>
            <Container>
              <PageSubTitle>
                Explorando o processo criativo da produção musical
              </PageSubTitle>
              <PageSubTitle>Transformando ideias em som</PageSubTitle>
            </Container>
            <Link to={"/sobre"}>
              <Button>Sobre mim</Button>
            </Link>
          </Container>
        </motion.div>
        <Container h={"h-220"} bg={"bg-black"}>
          <PageTitle>Lançamentos</PageTitle>
          
        </Container>
      </Section>
    </MainTemplate>
  );
}
