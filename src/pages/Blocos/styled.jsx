import styled from "styled-components";

export const BlocoStyled = styled.div`
  display: flex;
  align-items:center ;
  
  /* * {
    outline: 1px solid red;
  } */

  img {
    max-height: 50vh;
    object-fit: contain ;
  }

  #image-description {
    display: flex ;
    gap: 0.5rem;

    justify-content: space-around;
    align-items: center;
    max-width: 450px ;
    width: 100%;

    button {
      margin: 0 1rem ;
    }
  }
`