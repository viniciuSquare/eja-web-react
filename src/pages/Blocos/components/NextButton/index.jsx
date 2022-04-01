import { NextButtonStyled } from "./styled";

export default function NextButton({updateStateHandler}) {
  return(
    <NextButtonStyled onClick={updateStateHandler}>
      <svg width="59" height="43" viewBox="0 0 59 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M58.283 19.4918L42.0827 0.825307C41.6203 0.292471 41.0039 0 40.3467 0C39.6888 0 39.0728 0.292891 38.6104 0.825307L37.1395 2.52046C36.6774 3.05246 36.4229 3.76305 36.4229 4.5207C36.4229 5.27793 36.6774 6.01247 37.1395 6.54446L46.5905 17.4579H2.42347C1.06968 17.4579 0 18.6791 0 20.2394V22.6358C0 24.1961 1.06968 25.5404 2.42347 25.5404H46.6977L37.1399 36.5148C36.6778 37.0476 36.4232 37.7389 36.4232 38.4965C36.4232 39.2533 36.6778 39.9547 37.1399 40.4871L38.6107 42.1768C39.0732 42.7096 39.6892 43 40.3471 43C41.0043 43 41.6206 42.7059 42.0831 42.173L58.2833 23.507C58.7469 22.9724 59.0018 22.2589 59 21.5004C59.0014 20.7394 58.7469 20.0255 58.283 19.4918Z" fill="#fafafa"/>
      </svg>
    </NextButtonStyled>
  )
}