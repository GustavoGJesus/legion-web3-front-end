import { Cards } from "../cards";
import { CardContainer, DevelopmentProcessContainer, Title, Ul, Li } from "./styles";

export function DevelopmentProcess(){
  return (
    <DevelopmentProcessContainer>
      <Title>Development Steps</Title>

      <CardContainer>
        <Cards title="Idea">
          <Ul>
            <Li>Primeiro item da lista</Li>
            <Li>Segundo item da lista</Li>
            <Li>Terceiro item da lista</Li>
            <Li>Quarto item da lista</Li>
            <Li>Quinto item da lista</Li>
          </Ul>
        </Cards>

        <Cards title="Conception">
          <Ul>
            <Li>Primeiro item da lista</Li>
            <Li>Segundo item da lista</Li>
            <Li>Terceiro item da lista</Li>
            <Li>Quarto item da lista</Li>
            <Li>Quinto item da lista</Li>
          </Ul>
        </Cards>

        <Cards title="Development">
          <Ul>
            <Li>Primeiro item da lista</Li>
            <Li>Segundo item da lista</Li>
            <Li>Terceiro item da lista</Li>
            <Li>Quarto item da lista</Li>
            <Li>Quinto item da lista</Li>
          </Ul>
        </Cards>

        <Cards title="Improvement">
          <Ul>
            <Li>Primeiro item da lista</Li>
            <Li>Segundo item da lista</Li>
            <Li>Terceiro item da lista</Li>
            <Li>Quarto item da lista</Li>
            <Li>Quinto item da lista</Li>
          </Ul>
        </Cards>
      </CardContainer>
    </DevelopmentProcessContainer>
  );
}