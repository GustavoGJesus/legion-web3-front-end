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
  height: 300px;
  border-radius: 20px;
  padding: 30px 30px;
  background: #141414;
  gap: 20px;

  @media (max-width: 1000px) {
    padding: 20px 20px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;