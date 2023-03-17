import { ContainerCryptos, ContainerDevelopmentProcess, ContentCyptos, Description, MainContent, MainWarraper, Paragraph, Title } from "./styles";

import EthIcon from '../../assets/ethereum.png';
import PolygonIcon from "../../assets/polygon.png";
import SolanaIcon from "../../assets/solana.png"
import { DevelopmentProcess } from "../development-process";
import { ContactForm } from "../form-contact";

export function Main(){
    return (
      <MainWarraper>
        <MainContent>
          <Title>
            Welcome to Legion, let's put your idea into practice?
          </Title>
          <Description>
            Specialized web3 design for decentralized idea
          </Description>

          <ContainerCryptos>
            <ContentCyptos>
              <img src={EthIcon} alt="logo" style={{ width: "50px" }} />
              <Paragraph>Ethereum</Paragraph>
            </ContentCyptos>

            <ContentCyptos>
              <img src={PolygonIcon} alt="logo" style={{ width: "50px" }} />
              <Paragraph>Polygon</Paragraph>
            </ContentCyptos>

            <ContentCyptos>
              <img src={SolanaIcon} alt="logo" style={{ width: "50px" }} />
              <Paragraph>Solana</Paragraph>
            </ContentCyptos>
          </ContainerCryptos>

          <ContainerDevelopmentProcess>
            <DevelopmentProcess />
          </ContainerDevelopmentProcess>

          <ContactForm />
        </MainContent>
      </MainWarraper>
    );
}