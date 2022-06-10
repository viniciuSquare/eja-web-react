import { useState, useEffect } from 'react/cjs/react.development';

import { useSession } from '../../../hooks/useSession';

import { AiFillSound } from 'react-icons/ai';

import speak from "../../../services/speak";

import { InteractionStyled } from './styled';

import NextButton from '../components/NextButton';
import Header from '../../../Components/Header';
import HelpButton from '../../../Components/HelpButton';


export function ActiveInteraction() {
  
  const { 
    currentState,
    activeInteraction,
    nextInteractionHandler,
  } = useSession()

  console.log("Current state :", currentState);
  console.log("ACTIVE INTERACTION", activeInteraction)

  if(activeInteraction?.blocoId > 0){
    return (
      <>
        <Header tipoInteracao={activeInteraction.title}/>
          {
            !currentState?.aula ? 
              <Aula 
                letraRef={activeInteraction.letraReferencia} 
                palavra={activeInteraction.palavra} 
                urlImagem={activeInteraction.urlImagem} 
              />

            : !currentState?.atividadeCompletar ?
                <AtividadeCompletar 
                  letraRef={activeInteraction.letraReferencia} 
                  palavra={activeInteraction.palavra} 
                  aulaIncompleta={activeInteraction.aulaIncompleta} 
                  urlImagem={activeInteraction.urlImagem}
                  optionsList={activeInteraction.alternativas}
                  nextInteractionHandler={nextInteractionHandler}
                />              

              : !currentState?.atividadeDigitar &&    
                <AtividadeDigitar 
                  letraRef={activeInteraction.letraReferencia} 
                  palavra={activeInteraction.respostaCorreta} 
                  urlImagem={activeInteraction.urlImagem}
                  nextInteractionHandler={nextInteractionHandler}
                />
          }
        <HelpButton/>
      </>
    )
  } else return <h1>loading</h1>
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

      <NextButton updateStateHandler={nextInteractionHandler} />
    </InteractionStyled>
  )
}

// TODO - STYLE MAIN LETTER
export const Aula = ({urlImagem, letraRef, palavra, }) => {

  const {nextInteractionHandler} = useSession();

  return(
    <div className="interaction">
      <img src={urlImagem} />
      <div id="image-description" >
        <button onClick={()=>speak(palavra)} >
          <AiFillSound size='2rem' color="gray"/>
        </button>
        <Word refWord={palavra} />
      </div>
      <NextButton updateStateHandler={nextInteractionHandler} />
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
          <AiFillSound size='5rem' color="gray"/>
        </button>
        
        {/* <Word refWord={palavra} refLetter={letraRef}/> */}

        <form action="submit" onChange={handleAtividadeDigitarForm}>
          <fieldset >
            <div className="input">
              <input type="text"/>
            </div>
          </fieldset>
        </form>
      </div>
    </InteractionStyled>
  )
}



