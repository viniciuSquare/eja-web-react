import styled from "styled-components";

export const HeaderStyled = styled.header`
  /* outline: 1px solid red ; */
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(49, 111, 170, 0.4081) 90.62%, rgba(49, 111, 170, 0.2703) 100%);
  display: flex ;

  align-items: center;
  justify-content: space-between;

  padding: 1.3rem 2rem;

  width: 100%;

  @media (max-width: 485px) {
    font-size: 12px ;
    a img {
      width: 4rem ;
    }
    h3 {
      font-size: 2rem ;
    }
  }
`