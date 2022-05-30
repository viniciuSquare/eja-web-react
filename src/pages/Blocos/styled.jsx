import styled from "styled-components";

export const BlocoStyled = styled.div`
  img {
    max-height: 50vh;
    object-fit: contain ;
  }

  #image-description {
    display: flex ;
    gap: 0.5rem;

    justify-content: space-around;
    align-items: center;

    button {
      margin: 0 1rem ;
    }
  }
`