import styled from "styled-components";

export const AlfabetoStyled = styled.div`
  .lists {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around ;
  }

  .list-box {
    display: flex;
    gap: 2rem;

    height: 12rem;
    border-radius: 16px;

    padding: 1.3rem 2rem;

    background-color: white;
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