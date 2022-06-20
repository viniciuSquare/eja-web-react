import styled from "styled-components";

export const ActiveInteractionStyled = styled.div`
  flex: 1;
`

export const InteractionStyled = styled.div`
  margin-bottom: auto ;
  display: flex;
  flex-direction: column;

  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

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