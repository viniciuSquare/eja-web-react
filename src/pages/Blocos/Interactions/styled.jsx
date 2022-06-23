import styled from "styled-components";

export const ActiveInteractionStyled = styled.div`
  height: 80%;
  @media (max-width: 485px) {
    /* font-size: 12px ; */

    h3 {
      font-size: 2rem ;
    }
  }
`

export const InteractionStyled = styled.div`
  /* margin-bottom: auto ; */
  flex-direction: column;

  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    height: 45vh;
    width: 60vw;
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

  fieldset {
    border: none;
    
    max-width: 600px ;
    margin: auto ;

    input {
      height: 4rem ;
      width: 100%;

      padding: 1rem;
      text-align: center;

      background-color: #dcefff;
      outline: 1px solid #8799a914;

      border-radius: 6px;

      font-size: 3rem ;

    }
  }

  /* ATIVIDADE COMPLETAR */
  .interaction-options {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 450px;
    
    button {
      background-color: blue;
      color: white;
      border-radius: 1rem;
    }
    
    @media (max-width: 485px) {
      width: 70%;
      button {
        font-size: 16px ;
        height: 3rem;
        width: 3rem;
      }
    }
    
    @media (min-width: 486px) {
      button {
        font-size: 1.4rem ;
        height: 4rem;
        width: 7rem;
        
      }
    }
  }
  
`