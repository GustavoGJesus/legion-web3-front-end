import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 400px;

  @media (max-width: 773px) {
    flex-direction: column;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  padding: 60px 60px;
  background: #141414;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;