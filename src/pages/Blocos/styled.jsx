import styled from "styled-components";

export const BlocoStyled = styled.div`
  img {
    max-height: 50vh;
    object-fit: contain ;
  }

  #image-description {
    display: flex ;
    gap: 0.5rem;

    justify-content: center;
    align-items: center;

    button {
      margin: 0 1rem ;
    }
  }

  .interaction {
    margin-bottom: 8% ;
    display: flex;
    flex-direction: column;
  }

  .interaction-options {
    display: flex;
    justify-content: center;
    gap: 5rem;
    
    button {
      height: 80px;
      width: 120px;

      background-color: blue;
      color: white;
      border-radius: 1rem;

      font-size: 1.4rem;
    }

  }
`