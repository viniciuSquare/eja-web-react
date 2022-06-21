import styled from 'styled-components'

export const StyledWelcome = styled.div`
  /* background: gray; */
  position: relative;

  padding: 5rem;

  max-width: 800px ;
  margin: auto ;

  #login-background {
    max-width: 580px ;
    align-self: center ;
  }

  .login-button {
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

  /*
    Tablets, Ipads (portrait)
    Screen = B/w 768px to 1024px
  */
  @media (max-width: 650px) {
    #login-background {
      max-width: 460px
    }

  }

`