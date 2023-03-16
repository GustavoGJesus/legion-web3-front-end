import styled from "styled-components";

export const DevelopmentProcessContainer = styled.div`
  width: 100%;
  margin-top: 150px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;

  @media (max-width: 773px) {
    font-size: 30px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;

  margin-top: 70px;

  @media (max-width: 773px) {
    flex-direction: column;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Li = styled.li`
  margin-top: 10px;
`;