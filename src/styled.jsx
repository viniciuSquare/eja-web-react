import styled from "styled-components";

export const StyledApp = styled.div`
  /* * { // DEBUG STYLE
    outline: 1px solid red;
  }  */
  
  display: flex;
  justify-content: center;
  
  height: 100vh;
  width: 100vw;

  position: relative;

  /* BUTTON */
  button {
    cursor: pointer;
    line-height: normal;
    outline: none;
    border: none;
    background: transparent;
  }

  img {
    object-fit: contain;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  #background {
    z-index: -5;
    position: absolute;
    
    height: 100vh;
    width: 100%;

    max-width: 700px;

    object-fit: contain;

    opacity: 0.03;
  }

  .page-title {
    color: #1F4A75;
    align-self: flex-start;
  }  

  .page-content {
    width: 100%;

    > div {
      display: flex;
  
      height: 100%;
      
      &#dashboard {
        padding: 4rem 1rem 5rem;

      }
      
      flex-direction: column;
      justify-content: space-between;

    }
  }


`
