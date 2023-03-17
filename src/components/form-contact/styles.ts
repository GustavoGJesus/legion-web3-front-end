import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  align-items: center;

  @media (max-width: 773px) {
    margin-top: 20px;
  }

  /* text-align: center; */
`;

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 200;
`;

export const Title = styled.h3`
  background-image: linear-gradient(#fff, #171717);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 70px;

  @media (max-width: 773px) {
    font-size: 40px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  /* background: #141414; */
  border: 1px solid #f7f7f7;
  height: auto;
  border-radius: 20px;
  padding: 40px;
  margin-top: 50px;

  @media (max-width: 773px) {
    padding: 20px;
    width: 250px;
  }
`;

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 30px;

  @media (max-width: 773px) {
    /* padding: 20px; */
    width: 250px;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  border: 1px solid #f7f7f7;
  border-radius: 20px;
  font-weight: 500;

  padding: 18px;
  outline: none;
`;