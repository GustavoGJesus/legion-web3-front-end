import styled from "styled-components";

export const FooterWrapper = styled.div`
  /* height: 80px; */
  background: #141414;
  padding: 40px;
  align-items: center;
  justify-content: center;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    gap: 15px;
  }
`;

export const ContainerSocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;