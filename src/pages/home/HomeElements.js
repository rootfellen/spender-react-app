import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 50%;
  margin: auto;

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }

  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`;
