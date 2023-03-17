import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  /* width: 600px  !important; */
  /* height: 400px; */
  /* gap: 50px; */
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px !important;
  height: 200px;
  border-radius: 10px;
  padding: 30px 20px;
  /* background: #141414; */
  border: 1px solid #f7f7f7;
  gap: 20px;

  @media (max-width: 1000px) {
    padding: 20px 20px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 20px;

  background-image: linear-gradient(#fff, #171717);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;