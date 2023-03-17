import { Cards } from "../cards";
import { CardContainer, DevelopmentProcessContainer, Title, Ul, Li } from "./styles";

export function DevelopmentProcess(){
  return (
    <DevelopmentProcessContainer>
      <Title>Services</Title>

      <CardContainer>
        <Cards title="Design">
          <Ul>
            <Li>- Visual Indentity</Li>
            <Li>- UX/UI Design</Li>
            <Li>- Dapps product design</Li>
          </Ul>
        </Cards>

        <Cards title="Web3 Development">
          <Ul>
            <Li>- Smart Contracts</Li>
            <Li>- Dapps</Li>
            <Li>- Integrate with Blockchain</Li>
          </Ul>
        </Cards>

        <Cards title="NFT's">
          <Ul>
            <Li>- Authenticity</Li>
            <Li>- Security</Li>
            <Li>- Immutability</Li>
          </Ul>
        </Cards>
      </CardContainer>
    </DevelopmentProcessContainer>
  );
}