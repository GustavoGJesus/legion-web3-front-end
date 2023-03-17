import styled from "styled-components";


export const NftMintWrapper = styled.div`
    color: #000000;
    margin-top: 150px;
    display: flex;
    width: 100%;
    /* text-align: center; */
    /* height: 400px; */

    /* background: #f7f7f7; */
`;

export const NftMintContent = styled.div`
  color: #000000;
  width: 70%;

  @media (max-width: 773px) {
    width: 100%;
  }
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 50px;

  background-image: linear-gradient(#fff, #171717);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Paragraph = styled.p`
    font-weight: 300;
    font-size: 25px;
    margin-top: 20px;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 8px;
  border: 0;
  font-weight: 500;

  font-size: 18px;

  margin-top: 30px;
  background: #f0f0f0;

  color: #000000;
  cursor: pointer;
  transition: background-color 0.1s;

  @media (max-width: 600px) {
    padding: 10px 10px;
  }
`;