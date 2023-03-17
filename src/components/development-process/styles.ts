import styled from "styled-components";

export const DevelopmentProcessContainer = styled.div`
  width: 100%;
  margin-top: 150px;

  @media (max-width: 773px) {
    margin-top: 100px;
  }
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
  justify-content: center;
  gap: 40px;
  /* width: 100%; */

  margin-top: 70px;

  @media (max-width: 773px) {
    flex-direction: column;
    gap: 40px;
  }

  @media (max-width: 360px) {
    /* padding: 20px; */
    gap: 5px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  text-align: left;
`;

export const Li = styled.li`
  margin-top: 10px;
  font-size: 15px;
`;