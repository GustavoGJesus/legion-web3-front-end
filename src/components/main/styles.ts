import styled from "styled-components";

export const MainWarraper = styled.div`
    padding: 90px 50px;
`;

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    /* width: 70%; */
`;

export const Title = styled.p`
    font-size: 18px;
    font-weight: 200;
`;

export const Description = styled.h2`
  background-image: linear-gradient(#fff, #171717);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 70px;

  @media (max-width: 773px) {
    font-size: 35px;
  }
`;

export const ContainerCryptos = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 80px;
    align-items: center;
    gap: 90px;

    @media (max-width: 773px){
        flex-direction: column;
    }
`;

export const ContentCyptos = styled.div`
    display: flex;
    flex-direction: row; 
    gap: 10px
`;

export const Paragraph = styled.p`
    font-size: 30px;
    font-weight: 200
`;