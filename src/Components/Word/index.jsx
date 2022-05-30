import { Letter } from '../Letter'

export const Word = ({refWord}) => {
  console.log(refWord)
  
  refWord = refWord.split('');

  return(
    refWord.map( (letraRef, idx) => {
      if(idx == 0)
        letraRef = letraRef.toUpperCase()
      else
        letraRef = letraRef.toLowerCase()
      
      return <Letter key={idx} refLetter={letraRef}/>
    })
  )
}