import { useState, useEffect } from 'react';

import { useSession } from '../../../hooks/useSession';

import { AiFillSound } from 'react-icons/ai';

import speak from "../../../services/speak";

import { InteractionStyled, ActiveInteractionStyled } from './styled';

import NextButton from '../components/NextButton';
import Header from '../../../Components/Header';
import HelpButton from '../../../Components/HelpButton';
import Word from '../../../Components/Word';
import { useLocation } from 'react-router-dom';


export function ActiveInteraction() {
  
  const { 
    currentState,
    activeInteraction,
    nextInteractionHandler,
    setHelpAudio
  } = useSession()
  
  const location = useLocation();

  useEffect(()=>{
    console.log("Current state :", currentState);
    console.log("ACTIVE INTERACTION", activeInteraction)

    if( location.pathname != '/' && activeInteraction.audio) {
      setHelpAudio(activeInteraction.audio);
    }

  }, [])

  if(activeInteraction?.blocoId > 0){
    return (
      <ActiveInteractionStyled>
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
                  palavraIncompleta={activeInteraction.palavraIncompleta} 
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
      </ActiveInteractionStyled>
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

export const AtividadeCompletar = ({urlImagem, letraRef, palavra, palavraIncompleta, optionsList, nextInteractionHandler}) => {
  console.log("optionsList", optionsList)
  
  return(
    <InteractionStyled className="interaction">
      <img src={require(`../../../assets/images/bloco/${urlImagem}`)} />
      <div id="image-description" >
        <button onClick={()=>speak(palavra)} >
          <AiFillSound size='2rem' color="gray"/>
        </button>
        <Word refWord={palavraIncompleta} refLetter={letraRef} />
      </div>
      <div className="interaction-options">
        <Options optionsList={optionsList} nextInteractionHandler={nextInteractionHandler}/>
      </div>
    </InteractionStyled>
  )
}

// TODO - STYLE MAIN LETTER
export const Aula = ({urlImagem, letraRef, palavra, }) => {

  const {nextInteractionHandler} = useSession();

  return(
    <InteractionStyled className="interaction">
      <img src={require(`../../../assets/images/bloco/${urlImagem}`)} />
      <div id="image-description" >
        <button onClick={()=>speak(palavra)} >
          <AiFillSound size='2rem' color="gray"/>
        </button>
        <Word refWord={palavra} />
      </div>
      <NextButton updateStateHandler={nextInteractionHandler} />
    </InteractionStyled>

  )
}

export const AtividadeDigitar = ({urlImagem, letraRef, palavra, nextInteractionHandler}) => {
  let props = {urlImagem, letraRef, palavra}
  console.debug("AtividadeDigitar", props)

  const [ formInputValue, setFormInputValue ] = useState('');

  useEffect(()=>{
    if(formInputValue.toLocaleLowerCase() == palavra.toLowerCase()) {
      nextInteractionHandler()
    }
  },[formInputValue])

  const handleAtividadeDigitarForm = (event) => {
    console.log(event.target.value);
    setFormInputValue(event.target.value);
  }

  return(
    <InteractionStyled className="interaction">
      <img src={require(`../../../assets/images/bloco/${urlImagem}`)} />

      <div id="image-description" >
        <button onClick={()=>speak(palavra)} >
          <AiFillSound size='5rem' color="gray"/>
        </button>
        
        {/* <Word refWord={palavra} refLetter={letraRef}/> */}

        <form onChange={handleAtividadeDigitarForm} onSubmit={e=>e.preventDefault()}>
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



