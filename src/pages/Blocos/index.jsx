import { useEffect, useState } from "react";

import Header from "./components/Header"
import HelpButton from "../../Components/HelpButton";
import NextButton from "./components/NextButton";


import { useSession } from "../../hooks/useSession"

import { BlocoStyled } from "./styled"

import { Aula, AtividadeCompletar, AtividadeDigitar } from "./Interactions";
import { SessionContextProvider } from "../../Contexts/SessionContext";


export function Bloco() {
  const { 
    currentState,
    activeInteraction,
    isLoading,
    nextInteractionHandler
  } = useSession()

  useEffect(()=>{
    console.log(currentState)
  },[])

  console.log("Current state :", currentState);
  console.log("ACTIVE INTERACTION", activeInteraction)

  return(
    <BlocoStyled>
      { !isLoading &&   
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
            { !currentState?.aula &&
              <NextButton updateStateHandler={nextInteractionHandler} />
            }
          <HelpButton/>
        </>
      }
    </BlocoStyled>
  )
}
