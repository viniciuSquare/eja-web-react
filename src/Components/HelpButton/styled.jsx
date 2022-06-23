import styled from 'styled-components'


export const FloattingButtonStyled = styled.div`
  position: absolute ;

  left: 4% ;
  bottom: 2% ;

  button {
    opacity: 0.6;

    background: transparent;
    outline: none;
    border: none;

    &:hover {
      opacity: 0.8;

    }
  }

  @media (max-width: 680px) {
    width: 4rem ;
  }
`
