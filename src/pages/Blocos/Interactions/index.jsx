import { useState, useEffect } from 'react/cjs/react.development';

import { InteractionStyled } from './styled';

import { AiFillSound } from 'react-icons/ai'

import Letter from '../components/Letter'

import speak from "../../../services/speak";

const Word = ({refWord}) => {
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

const Options = ({optionsList, nextInteractionHandler}) => {
  console.log(optionsList);

  function validateAnswer(isCorrect) {
    if (isCorrect) {
      nextInteractionHandler()
    } else {
      alert("Errado, tente novamente");
    }
  }

  return(
    optionsList.map( (option,idx) => <button key={idx} onClick={() => validateAnswer(option.correta)}>{option.textoAlternativa}</button>)
  )
}
 
// TODO - INTERACTIONS VALIDATION

export const AtividadeCompletar = ({urlImagem, letraRef, palavra, palavraCompleta, optionsList, nextInteractionHandler}) => {
  console.log("optionsList", optionsList)
  
  return(
    <InteractionStyled className="interaction">
      <img src={urlImagem} />
      <div id="image-description" >
        <button onClick={()=>speak(palavraCompleta)} >
          <AiFillSound size='2rem' color="gray"/>
        </button>
        <Word refWord={palavra} refLetter={letraRef} />
      </div>
      <div className="interaction-options">
        <Options optionsList={optionsList} nextInteractionHandler={nextInteractionHandler}/>
      </div>
    </InteractionStyled>
  )
}

// TODO - STYLE MAIN LETTER
export const Aula = ({urlImagem, letraRef, palavra, }) => {

  return(
    <div className="interaction">
      <img src={urlImagem} />
      <div id="image-description" >
        <button onClick={()=>speak(palavra)} >
          <AiFillSound size='2rem' color="gray"/>
        </button>
        <Word refWord={palavra} />
      </div>
    </div>

  )
}


export const AtividadeDigitar = ({urlImagem, letraRef, palavra, nextInteractionHandler}) => {
  let props = {urlImagem, letraRef, palavra}
  console.debug("AtividadeDigitar", props)

  const [ formInputValue, setFormInputValue ] = useState('');

  useEffect(()=>{
    if(formInputValue == palavra.toLowerCase()) {
      alert("Acertou!!!!")
  
    }
  },[formInputValue])

  const handleAtividadeDigitarForm = (event) => {
    console.log(event.target.value);
    setFormInputValue(event.target.value);
  }

  return(
    <InteractionStyled className="interaction">
      <img src={urlImagem} />

      <div id="image-description" >
        <button onClick={()=>speak(palavra)} >
          <AiFillSound size='2rem' color="gray"/>
        </button>
        <Word refWord={palavra} refLetter={letraRef}/>
      </div>
      <form action="submit" onChange={handleAtividadeDigitarForm}>
        <fieldset >
          <div className="input">
            <input type="text"/>
          </div>
        </fieldset>
      </form>
    </InteractionStyled>
  )
}



