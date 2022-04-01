import { useEffect, useState } from "react";

import { Header } from "./components/Header"
import { HelpButton } from "../../Components/HelpButton";

import { useSession } from "../../hooks/useSession"

import { BlocoStyled } from "./styled"

import { Letter } from './components/Letter'

import { AiFillSound } from 'react-icons/ai'
import speak from "../../services/speak";
import NextButton from "./components/NextButton";

export function Bloco() {
  // TODO -> GET CURRENT BLOCO & INTERACTIONS STATE 

  const { 
    currentBlocoData, currentState, setCurrentState,
    nextBlocoStateUpdate,
    setHelpAudio
  } = useSession()

  const [activeInteraction, setActiveInteraction] = useState({});

  // DETERMINE WHICH INTERACTION IS UNDONE
  useEffect(()=>{
    console.log(currentState)
    if(currentState?.aula == false)
      setActiveInteraction({key: "aula", title: 'Aula'})
  
    else if(currentState?.atividadeCompletar == false)
      setActiveInteraction({key: "atividadeCompletar", title: 'Atividade Completar'})
      
    else if(currentState?.atividadeDigitar == false)
      setActiveInteraction({key: "atividadeDigitar" , title: 'Atividade Digitar'})

    // TODO -> UPDATE localStorage STATE

    console.log(currentBlocoData)
  },[])

  useEffect(()=>{
    if (currentBlocoData[activeInteraction?.key])
      setHelpAudio(currentBlocoData[activeInteraction?.key].audio)

  },[currentBlocoData])

  useEffect(()=>{
    console.log("CURRENT STATE UPDATED");
  },[currentState])

  function nextInteractionHandler() {
    if(!currentState?.aula) {
      setCurrentState({
        aula: true,
        ...currentState
      })
    }
    else if (!currentState?.atividadeDigitar) {
      setCurrentState({
        atividadeDigitar: true,
        ...currentState
      })
    }
    else if(!currentState?.atividadeCompletar) {
      setCurrentState({
        atividadeCompletar: true,
        ...currentState
      })
    }
  }

  console.log("BLOCOS :", currentBlocoData);

  return(
    <BlocoStyled>
      <Header tipoInteracao={activeInteraction.title}/>
      {
        !currentState?.aula ? 
          
          <Aula letraRef={currentBlocoData.letraReferencia} palavra="amendoim" />

        : !currentState?.atividadeDigitar ?
            
            <AtividadeDigitar letraRef={currentBlocoData.letraReferencia} palavra="amendoim"  />
            
            : !currentState?.atividadeCompletar ?
              
              <h1>Atividade completar</h1>
              
              : null
      }
      <NextButton updateStateHandler={nextInteractionHandler} />
      <HelpButton/>
    </BlocoStyled>
  )
}

const Aula = ({imagem, letraRef, palavra}) => {

  const imageDesc = palavra.split("") || "asas".split("")

  console.log("LETRAS", imageDesc)
  return(
    <>
      <img src="../../src/assets/images/bloco/A/asas.png" />
      <div id="image-description" >
        <button onClick={()=>speak(palavra)} >
          <AiFillSound size='2rem' color="gray"/>
        </button>
        {
          imageDesc.map( (letraRef, idx) => {
            if(idx == 0)
              letraRef = letraRef.toUpperCase()
            else
              letraRef = letraRef.toLowerCase()
            
            return <Letter key={idx} refLetter={letraRef}/>
          })
        }
      </div>
    </>

  )
}

const AtividadeDigitar = ({imagem, letraRef, palavra}) => {

  // IMAGEM
  // PALAVRA INCOMPLETA
  // OPÇÕES

  const imageDesc = palavra.split("") || "asas".split("")

  console.log("LETRAS", imageDesc)
  return(
    <>
      <img src="../../src/assets/images/bloco/A/asas.png" />

      <div id="image-description" >
        <button onClick={()=>speak(palavra)} >
          <AiFillSound size='2rem' color="gray"/>
        </button>
        {
          imageDesc.map( (letraRef, idx) => {
            if(idx == 0)
              letraRef = letraRef.toUpperCase()
            else
              letraRef = letraRef.toLowerCase()
            
            return <Letter key={idx} refLetter={letraRef}/>
          })
        }
      </div>
    </>

  )
}