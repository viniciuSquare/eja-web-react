import styled from "styled-components";

export const StyledProgressBar = styled.div`
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

    position: relative;
    
    height: 100%;
    width: 100%;

    .progession {
      height: 0.8rem;
      width: 100%;

      border-radius: 2px;

      position: relative;

      background: #C4C4C4;

      span {
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 3px;
        transition: width 10s ease-in-out;
      }
    }
  }
`

const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
  transition: width 1s ease-in-out;
`;

export const Background = styled(BaseBox)`
  background: #c7c7c773;
  width: 100%;
`;

export const Progress = styled(BaseBox)`
  background: blue;
  width: ${({ percent }) => percent}%;
`;