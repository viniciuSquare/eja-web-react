import styled from 'styled-components'

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-header {
    width: 90%;
    padding: 0 1rem;
    
    height: 15rem;

    display: flex;
    align-items: center;

    background: rgba(255, 255, 255, 0.7);
    max-height: 100px;

    border-radius: 8px;

    box-shadow: 0px 8px 15px -15px rgba(0,0,0, 0.3);

    .badge {
      background: rgba(189, 205, 221, 0.93);

      padding: 1.2rem;
      margin: 0 1rem;
      border-radius: 50%;
    }

    .user-n-progession {
      display: flex;
      flex-direction: column ;
      justify-content: space-around;
      
      height: 100%;
      width: 100%;
      
      #user-name {
        /* STYLE USER NAME APPEREANCE */

      }

      .progession {
        height: 0.6rem;
        border-radius: 2px;
  
        background: #C4C4C4;
        &::before { /* TODO - ATTEMPT TO CREATE PROGRESS BAR */
          content: ' ';
  
          background-color: blue;
          
          height: 100% ;
          height: 20px;
          width: 20px;
        }
      }
    }

  }

  .routing-menu {    
    display: flex ;

    flex-direction: column;

    width: 90% ;

    gap: 2rem;

    a {
      display: flex ;

      align-items: center ;
      justify-content: space-evenly ;

      height: 20vh;

      background: rgba(208, 226, 242, 0.85);
      border: 7px solid rgba(59, 139, 215, 0.35);

      box-shadow: 0px 4px 52px -70px rgba(255, 255, 255, 0.25);
      border-radius: 1.5rem;

      /* img {
        margin: 0 2.5rem;
      } */

      h3 {
        font-size: 3rem;

      }
    }
  }
`