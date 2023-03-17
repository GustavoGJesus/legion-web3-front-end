import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  /* width: 600px  !important; */
  /* height: 400px; */
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px !important;
  height: 300px;
  border-radius: 20px;
  padding: 30px 30px;
  background: #141414;

  @media (max-width: 1000px) {
    padding: 40px 40px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;