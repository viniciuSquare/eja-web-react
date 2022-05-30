import styled from "styled-components";

export const FeedbackModalStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.208);
  z-index: 5;
  display: flex;
  /* * {
    outline: 1px solid black;
  } */
  
  .modal-content {
    background-color: white;
    min-height: 30vh;
    max-height: 90vh;
    width: 55vw;
    padding: 1.2rem 1.5rem 2.5rem;
    margin: auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column ;
    align-items: center ;
    .buttons-wrapper{
      margin-top: 3rem ;
      width: 100%;
      display: flex ;
      justify-content:space-around ;
    }
  }
`