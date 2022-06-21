import { createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

import api from '../services/api'

export const SessionContext = createContext({});

export function SessionContextProvider({children}) {  
  const [ isLoading, setIsLoading ] = useState(true);

  const baseBlocoStructure = {
    id: 1,
    aula: false,
    atividadeCompletar: false,
    atividadeDigitar: false,
  }

  const [ currentBlocoData, setCurrentBlocoData ] = useState({});
  const [ currentState, setCurrentState ] = useState({});

  const [ activeInteraction, setActiveInteraction] = useState({});

  const [ isFeedbackShown, setIsFeedbackShown ] = useState(false);

  const [ helpAudio, setHelpAudio ] = useState("Este é o DASHBOARD! Aqui é possível ver o progresso atual, conhecer letras e números no alfatebeto ou aprender com as aulas.")


  const { user } = useAuth()
  const navigate = useNavigate()       

  function updateActiveInteraction (currentState) {
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
      } else {
        if(currentState.atividadeCompletar == false){
          setActiveInteraction({
            blocoId: currentBlocoData.id , 
            key: "atividadeCompletar", 
            title: 'Atividade Completar',
            letraReferencia: currentBlocoData.letraReferencia, ...currentBlocoData.atividadeCompletar
          })
          console.log("atividadeCompletar IS ACTIVE")
        } else {
          if(currentState.atividadeDigitar == false){
            setActiveInteraction({
              blocoId: currentBlocoData.id , 
              key: "atividadeDigitar" , 
              title: 'Atividade Digitar',
              letraReferencia: currentBlocoData.letraReferencia, ...currentBlocoData.atividadeDigitar
            })
            console.log("atividadeDigitar IS ACTIVE")
    
          }
        }
      }

    } else {
      console.log("THERE IS NO CURRENT BLOCO");
    }
    console.log("SAIU UPDATE AI")
    if(isLoading)
      setIsLoading(false);
  }
  
  const getBlocoData = async (blocoId) => {
    await api.get(`/?id=${blocoId}`)
      .then( ({data}) => {
        if(currentBlocoData?.id != data.blocoData.id ) {
          setCurrentBlocoData(data.blocoData);
          console.log("BLOCO DATA FETCHED ",data.blocoData);
        } else
          console.debug("IS THE SAME BLOCO, WRONG CONDITION");

        setIsLoading(false);
      }).catch( error => { 
        console.log(error)
        console.log("ERROR, TRYING AGAIN IN 3 SEC");

        // setTimeout(() => {
        //   getBlocoData(blocoId);
        // }, 3000)        
      })
  }

  const nextInteractionHandler = () => {
    console.log("Next interaction handler")

    const updatedState = {
      ...currentState,
      [activeInteraction.key] : true
    }

    setIsFeedbackShown(true);
    setTimeout(()=>{
      setIsFeedbackShown(false);
      setIsLoading(true)
      // IF UPDATED STATE IS A COMPLETE BLOCO STATE => ALL INTERACTIONS ARE DONE 
      if(interactionValidation(updatedState)) {
        // TODO - CONGRATULATE USER
  
        let newBloco_baseState = {...baseBlocoStructure};
        newBloco_baseState.id = currentState.id + 1;
  
        console.log('temp currernt state: ', newBloco_baseState);
  
        getBlocoData(updatedState.id);
  
        setCurrentState({...newBloco_baseState});
        localStorage.setItem('bloco',JSON.stringify(newBloco_baseState));
      } else {
        console.log("NEW CS", updatedState);
        setCurrentState(updatedState);
        localStorage.setItem('bloco',JSON.stringify(updatedState));  
      }
  
      updateActiveInteraction(updatedState);
      setIsLoading(false);

    }, 3500)
  }

  // RETURN IF ALL THE INTERACTIONS ARE DONE;
  let interactionValidation = (currentState) => {
    let interactionsState = { ...currentState }
    delete interactionsState.id;

    return Object.values(interactionsState).every(interaction => interaction == true);
  }   

  useEffect(()=>{
    if(!user.logged)
      navigate('/login');
    if(!localStorage.getItem("bloco"))
      localStorage.setItem('bloco', JSON.stringify(currentState))

    if(currentState.id == undefined ) {
      console.log("VALIDATING CS")
      JSON.parse(localStorage.getItem("bloco")).id != undefined 
      ? setCurrentState(JSON.parse(localStorage.getItem("bloco")) )
      : setCurrentState({...baseBlocoStructure })
    }
  },[])

  useEffect( () =>{
    console.log(isNaN(currentBlocoData?.id), isNaN(currentState?.id))

    // IF STATE IS DEFINED & THERE`RE NO BLOCO
    if(isNaN(currentBlocoData?.id) && !isNaN(currentState?.id) ) {
      getBlocoData(currentState.id);
      console.log("FETCHING BLOCO");
    } 
    if ( !isNaN(currentState?.id) && ((currentState.id != activeInteraction.blocoId) || currentState[activeInteraction[activeInteraction.key]])) {
      console.debug("activeInteraction at current state",currentState[activeInteraction[activeInteraction.key]]);
      updateActiveInteraction(currentState);
    }
    console.log("changed CS ", currentState, activeInteraction.blocoId)
  },[currentState]);
  

  // UPDATE SCREEN HELP AUDIO ACORDING TO ACTIVE INTERACTION
  useEffect(()=>{
    console.log("ACTIVE INTERACTION UPDATED", activeInteraction);

  },[activeInteraction])

  useEffect(()=>{
    if(currentBlocoData.id) {
      // FIRST TIME
      if(!activeInteraction.blocoId ) {
        console.log("FIRST TIME - UPDATING ACTIVE BLOCO")
        updateActiveInteraction(currentState);
      } else {
        console.log("NEW UPDATE AI")
        // ON NEW BLOCO  
        if ( activeInteraction.blocoId != currentState.id ) {
          console.log("NEW BLOCO - UPDATING ACTIVE BLOCO")
          updateActiveInteraction(currentState);
        }
      }
    }
  },[ currentBlocoData ])

  useEffect(()=>{
    console.log("isLoading updated",isLoading)
  },[isLoading])

  return(
    <>
      <SessionContext.Provider 
        value={{
          currentBlocoData, setCurrentBlocoData,
          currentState, setCurrentState,
          activeInteraction,
          helpAudio, setHelpAudio,
          nextInteractionHandler, 
          getBlocoData,
          isLoading, setIsLoading,
          isFeedbackShown, setIsFeedbackShown

        }}
      >
        { children }
      </SessionContext.Provider>
    </>
  )
}