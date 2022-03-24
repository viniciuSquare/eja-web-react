import { useEffect, useState } from "react";

import { Header } from "./components/Header"
import { HelpButton } from "../../Components/HelpButton";

import { useSession } from "../../hooks/useSession"

import { BlocoStyled } from "./styled"

import { Letter } from './components/Letter'

import { AiFillSound } from 'react-icons/ai'
import speak from "../../services/speak";

export function Bloco() {
  // TODO -> GET CURRENT BLOCO & INTERACTIONS STATE 

  const { 
    currentBlocoData, currentState,
    nextBlocoStateUpdate,
    setHelpAudio
  } = useSession()

  const [activeInteraction, setActiveInteraction] = useState({});

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
    currentBlocoData[activeInteraction?.key] ? 
      setHelpAudio(currentBlocoData[activeInteraction?.key].audio)
      : null
  
  },[currentBlocoData])

  console.log("BLOCOS :", currentBlocoData);

  return(
    <BlocoStyled>
      <Header tipoInteracao={activeInteraction.title}/>
      <h1>Bloco</h1>
      {
        !currentState?.aula ? 
          
          <Aula letraRef={currentBlocoData.letraReferencia} palavra="amendoim" />

        : !currentState?.atividadeDigitar ?
            
            <h1>Atividade digitar</h1>
            
            : !currentState?.atividadeCompletar ?
              
              <h1>Atividade completar</h1>
              
              : null
      }
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