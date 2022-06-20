import styled from "styled-components";

export const AlfabetoStyled = styled.div`
  .lists {
    height: 100%;
    display: flex;

    flex-direction: column;
    justify-content: space-around ;

    padding: 2rem 0 ;

    gap: 2rem;
  }
  
  .list-box {
    display: flex;
    column-gap: 2rem;
    flex-wrap: wrap;
    align-items: center;

    height: 100%;
    position: relative;

    border-radius: 16px;

    padding: 1.3rem 2rem;

    background-color: white;

    border: 3px solid #dfdfdf;

    .alphabet-legend {
      position: absolute;
      top: -1.5rem;

      font-size: 2rem;
    }
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