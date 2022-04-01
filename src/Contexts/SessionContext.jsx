import { createContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

import api from '../services/api'

export const SessionContext = createContext({});

export function SessionContextProvider(props) {
  const env = "dev"

  let MOCK_blockData = { // MOCK DATA TO WORK WITHOUT THE API
    bloco : {
      id: 2,
      type: "mock",
      aula: {
        id:1,
        audio:"Está é uma palavra que começa com a letra \"A\"",
        urlImagem:"",
        palavra: "asas",
        letraReferencia:"A",
      },
      atividadeCompletar: {
        id: 1,
        palavraCompleta: "AMORA",
        palavraIncompleta: "AMO__",
        audio: "Agora complete a palavra AMORA",
        alternativas: [
          {
            id: 1,
            correta: true,
            textoAlternativa: "RA"
          }, 
          {
            id:2,
            correta: false,
            textoAlternativa: "MO"
          }
        ]
      },
      atividadeDigitar: {
        id:1,
        respostaCorreta:"BASQUETE",
        audio:"Agora digite BASQUETE"
      }
    }
  }
  const baseBlocoStructure = {
    id: 1,
    aula: false,
    atividadeCompletar: false,
    atividadeDigitar: false,
  }

  const [ currentBlocoData, setCurrentBlocoData ] = useState({ });
  const [ currentState, setCurrentState ] = useState({...baseBlocoStructure});

  const [helpAudio, setHelpAudio] = useState('Clique no desenho da casa para ir à página inicial')
  
  useEffect(()=>{
    console.log("Alterado")
    
    setCurrentBlocoData({...MOCK_blockData.bloco})
    
  },[currentState])
      
  useEffect(()=>{
    
  },[])

  function updateCurrentState(id = 1, iteration) {
    let localStorageBlocoState = JSON.parse(localStorage.getItem("bloco"));
    console.log("LSB", localStorageBlocoState)
  
    if(!localStorageBlocoState) {
      // ESTADO ATUAL COM ID DO BLOCO E INTERAÇÃO A FAZER/FEITA
      localStorage.setItem('bloco', JSON.stringify(currentState));
      localStorageBlocoState = {...currentState}
    }
  }
  

  function nextBlocoStateUpdate(blocoId) {
    setCurrentState ({
      id: blocoId,
      ...baseBlocoStructure    
    })
    // TODO - UPDATE currentBlocoData TO NEW BLOCO
    // fectchBlocoData(blocoId);
  }

  async function fetchBlocoData(bloco) {
    await api.get(`/${bloco.id}`)
      .then(({data}) => setCurrentBlocoData(data))
  }

  function setMockBlocoData() {
    if(!localStorage.getItem("bloco")) {
      localStorage.setItem("bloco", JSON.stringify(MOCK_blockData));
    }    
  }

  // CHECK CURRENT STATE
  // FETCH BLOCK DATA
    // FEED BLOCK DATA  

  return(
    <SessionContext.Provider 
      value={{
        currentBlocoData, setCurrentBlocoData,
        currentState, setCurrentState,
        nextBlocoStateUpdate, 
        helpAudio, setHelpAudio
      }}
    >
      {props.children}
    </SessionContext.Provider>
  )
}