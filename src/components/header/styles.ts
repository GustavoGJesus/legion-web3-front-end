import styled from "styled-components";

export const HeaderWrapper = styled.nav`
  padding: 30px 50px 30px 50px;

  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    
    align-items: center;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 8px;
  border: 0;

  font-weight: 400;
  background: #f0f0f0;
  
  color: #000000;
  cursor: pointer;
  transition: background-color 0.1s;

  @media (max-width: 600px) {
    padding: 10px 10px
  }
`;