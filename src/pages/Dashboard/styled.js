import styled from 'styled-components'

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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