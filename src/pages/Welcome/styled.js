import styled from 'styled-components'

export const StyledWelcome = styled.div`
  /* background: gray; */
  
  .login {
    width: 100%;
    display: flex;
    justify-content: center;

    #google-login {
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
  
      width: 100%;
  
      color: white;
      font-size: 1.3rem;
  
      background-color: #ABC3D8;
      border-radius: 8px;
      border: none;
  
      box-shadow: 2px 4px 3px 0px rgba(0,0,0,0.2);
      -webkit-box-shadow: 2px 4px 3px 0px rgba(0,0,0,0.2);
      -moz-box-shadow: 2px 4px 3px 0px rgba(0,0,0,0.2);
  
      max-width: 500px;
  
      img {
        margin: 0 1rem;
      }
    }
  }


`