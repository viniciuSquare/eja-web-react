import { createContext, useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

import api from '../services/api'

export const SessionContext = createContext({});

export function SessionContextProvider({children}) {  
  const baseBlocoStructure = {
    id: 1,
    aula: false,
    atividadeCompletar: false,
    atividadeDigitar: false,
  }

  const [ isLoading, setIsLoading ] = useState(true);

  const [ currentBlocoData, setCurrentBlocoData ] = useState({});
  const [ currentState, setCurrentState ] = useState({...baseBlocoStructure});
  const [ activeInteraction, setActiveInteraction] = useState({});

  const [helpAudio, setHelpAudio] = useState("Este é o DASHBOARD! Aqui é possível ver o progresso atual, entrar no alfabeto e nos blocos de aula.")
      
  // RETURN IF ALL THE INTERACTIONS ARE DONE;
  let interactionValidation = (currentState) => {
    let interactionsState = { ...currentState }
    delete interactionsState.id;

    return Object.values(interactionsState).every(interaction => interaction == true);
  } 

  const updateActiveInteraction = (currentState) => {
    if(currentBlocoData?.id) {
      console.log("CURRENT BLOCO ID: ", currentBlocoData?.id)
      
      // DETERMINE WHICH IS THE ACTIVE INTERACTION

      if(currentState.aula == false){
        setActiveInteraction({
          blocoId: currentBlocoData.id , 
          key: "aula", 
          title: 'Aula', 
          letraReferencia: currentBlocoData.letraReferencia,...currentBlocoData.aula
        })
        console.log("aula IS ACTIVE")
      }
      else if(currentState.atividadeCompletar == false){
        setActiveInteraction({
          blocoId: currentBlocoData.id , 
          key: "atividadeCompletar", 
          title: 'Atividade Completar',
          letraReferencia: currentBlocoData.letraReferencia, ...currentBlocoData.atividadeCompletar
        })
        console.log("atividadeCompletar IS ACTIVE")
      }
      else if(currentState.atividadeDigitar == false){
        setActiveInteraction({
          blocoId: currentBlocoData.id , 
          key: "atividadeDigitar" , 
          title: 'Atividade Digitar',
          letraReferencia: currentBlocoData.letraReferencia, ...currentBlocoData.atividadeDigitar
        })
        console.log("atividadeDigitar IS ACTIVE")

      }

    } else {
      console.log("THERE IS NO CURRENT BLOCO");
    }
  }
  
  const getBlocoData = async (blocoId) => {
    
    await api.get(`/?id=${blocoId}`)
      .then( ({data}) => {
        if(currentBlocoData?.id != data.blocoData.id ) {
          setCurrentBlocoData(data.blocoData);
          setIsLoading(false);
          console.log("BLOCO DATA FETCHED ",data.blocoData);
        } else
          console.debug("IS THE SAME BLOCO, WRONG CONDITION");
      }).catch( error => { 
        console.log("ERROR, TRYING AGAIN IN 3 SEC");

        setTimeout(() => {
          getBlocoData(blocoId);
        }, 3000)        
      }

      )
  }

  const nextInteractionHandler = () => {
    console.log("Next interaction handler")

    const updatedState = {
      ...currentState,
      [activeInteraction.key] : true
    }
    
    // IF UPDATED STATE IS A COMPLETE BLOCO STATE => ALL INTERACTIONS ARE DONE 
    if(interactionValidation(updatedState)) {
     
      // TODO - CONGRATULATE USER

      let newBloco_baseState = {...baseBlocoStructure};
      newBloco_baseState.id = currentState.id + 1;

      console.log('temp currernt state: ', newBloco_baseState);

      setIsLoading(true);
      getBlocoData(updatedState.id);

      setCurrentState({...newBloco_baseState});
      localStorage.setItem('bloco',JSON.stringify(newBloco_baseState));
    } else {
      setCurrentState(updatedState);
      localStorage.setItem('bloco',JSON.stringify(updatedState));  
    }

    updateActiveInteraction(updatedState);
    getBlocoData(updatedState.id);

  }

  // SET CURRENT STATE
  useEffect(()=>{
    let localStorageBlocoState = JSON.parse(localStorage.getItem("bloco"));
    console.log("LS Bloco", localStorageBlocoState)
    
    // ESTADO ATUAL COM ID DO BLOCO E INTERAÇÃO A FAZER/FEITA
    if(!localStorageBlocoState) {
      console.log("ESTADO ATUAL ATUALIZADO COMO ESTADO BASE")
      localStorage.setItem('bloco', JSON.stringify(currentState));
      localStorageBlocoState = {...currentState}

    } else {
      console.log("ESTADO ATUAL ATUALIZADO EM RELAÇÃO AO localStorage")
      setCurrentState({...localStorageBlocoState})
    }
    
  },[])

  useEffect(()=>{
    // IF STATE IS DEFINED & THERE`RE NO BLOCO
    if(currentState.id && !currentBlocoData?.id) {
      getBlocoData(currentState.id);
    } else if ((currentState.id != activeInteraction.blocoId) || currentState[activeInteraction[key]]) {
      console.debug("activeInteraction at current state",currentState[activeInteraction[key]]);
      updateActiveInteraction(currentState);
    }
  },[currentState]);

  // UPDATE SCREEN HELP AUDIO ACORDING TO ACTIVE INTERACTION
  useEffect(()=>{
    console.log("ACTIVE INTERACTION UPDATED", activeInteraction);

    if(activeInteraction.audio) {
      setHelpAudio(activeInteraction.audio);
    }

  },[activeInteraction])

  return(
    <>
      <SessionContext.Provider 
        value={{
          currentBlocoData, setCurrentBlocoData,
          currentState, setCurrentState,
          activeInteraction,
          helpAudio, setHelpAudio,
          // TODO
          nextInteractionHandler, 
          getBlocoData,
          isLoading, setIsLoading

        }}
      >
        { children }
      </SessionContext.Provider>
    </>
  )
}