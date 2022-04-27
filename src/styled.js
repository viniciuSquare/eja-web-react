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

  .page-content {
    max-width: 800px;
    width: 98%;

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

  .page-title {
    color: #1F4A75;
  }

`
