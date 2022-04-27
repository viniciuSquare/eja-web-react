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

  const [helpAudio, setHelpAudio] = useState('Clique no desenho da casa para ir à página inicial')
      
  // RETURN IF ALL THE INTERACTIONS ARE DONE;
  let interactionValidation = (currentState) => {
    let interactionsState = { ...currentState }
    delete interactionsState.id;

    return Object.values(interactionsState).every(interaction => interaction == true);
  } 

  const updateActiveInteraction = (currentBlocoData, currentState) => {
    if(currentBlocoData?.id) {
      console.log("CURRENT BLOCO ID: ", currentBlocoData?.id)
      // DETERMINE WHICH IS THE ACTIVE INTERACTION
      if(currentState?.aula == false){
        setActiveInteraction({key: "aula", title: 'Aula', letraReferencia: currentBlocoData.letraReferencia,...currentBlocoData.aula})
        console.log("aula IS ACTIVE")
      }
      else if(currentState?.atividadeCompletar == false){
        setActiveInteraction({key: "atividadeCompletar", title: 'Atividade Completar',letraReferencia: currentBlocoData.letraReferencia, ...currentBlocoData.atividadeCompletar})
        console.log("atividadeCompletar IS ACTIVE")
        }
      else if(currentState?.atividadeDigitar == false){
        setActiveInteraction({key: "atividadeDigitar" , title: 'Atividade Digitar',letraReferencia: currentBlocoData.letraReferencia, ...currentBlocoData.atividadeDigitar})
        console.log("atividadeDigitar IS ACTIVE")

      } else if(interactionValidation(currentState)) {
        // TODO -> UPDATE CURRENT STATE BLOCO & getCurrentBlocoData();
        let temp_currentState = {...baseBlocoStructure};
        temp_currentState.id = currentState.id + 1;

        console.log('temp currernt state: ', temp_currentState);

        setIsLoading(true);
        setCurrentState({...temp_currentState});

        localStorage.setItem('bloco',JSON.stringify(temp_currentState));

      }

      setIsLoading(false)

    } else {
      console.log("THERE IS NO CURRENT BLOCO");
    }
  }
  
  const getCurrentBlocoData = async () => {
    await api.get(`/?id=${currentState.id}`)
      .then( ({data}) => {
        if(currentBlocoData?.id != data.blocoData.id ) {
          setCurrentBlocoData(data.blocoData);
          updateActiveInteraction(data.blocoData, currentState);
        }
      } )
    // TODO -> IF THERE IS BLOCO DATA (INTERECTION COMPLETETION CASE), DO NOT SET BLOCO DATA.

    // return data.blocoData
  }

  const nextInteractionHandler = () => {
    console.log("Next interaction handler")
    setCurrentState({
      ...currentState,
      [activeInteraction.key] : true
    })

    const currentStateUpdatedValue = {
      ...currentState,
      [activeInteraction.key] : true
    }
    
    updateActiveInteraction(currentBlocoData, currentStateUpdatedValue);

    localStorage.setItem('bloco',JSON.stringify(currentStateUpdatedValue));
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

  // UPDATE SCREEN HELP AUDIO ACORDING TO ACTIVE INTERACTION
  useEffect(()=>{
    console.log("ACTIVE INTERACTION UPDATED", activeInteraction);

    if(activeInteraction.audio) {
      setHelpAudio(activeInteraction.audio);
    }

  },[activeInteraction])

  return(
    <SessionContext.Provider 
      value={{
        currentBlocoData, setCurrentBlocoData,
        currentState, setCurrentState,
        activeInteraction,
        helpAudio, setHelpAudio,
        // TODO
        nextInteractionHandler, 
        getCurrentBlocoData,
        isLoading, setIsLoading

      }}
    >
      { children }
    </SessionContext.Provider>
  )
}