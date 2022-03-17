import {createContext, useState} from 'react'

export const SessionContext = createContext({});

export function SessionContextProvider(props) {

  let MOCK_blockData = { // BLOCO
    bloco : {
      id: 1,
      type: "mock",
      aula: { },
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
      atividadeDigitar: { }
    }
  }

  const [currentBloco, setCurrentBloco] = useState({ });

  function setMockBlocoData() {
    if(!localStorage.getItem("bloco")) {
      localStorage.setItem("bloco", JSON.stringify(MOCK_blockData));
    }    
  }

  function getCurrentBlock() {
    let blocoData 

    while(localStorage.getItem("bloco") == null) {
      setMockBlocoData();

      console.log("Rodei")
    }

    blocoData = JSON.parse(localStorage.getItem("bloco"))
    
    console.log("SESSION CONTEXT RUNNED\n BLOCO DATA:", blocoData.bloco);
    
    return blocoData;
  }

  getCurrentBlock()

  return(
    <SessionContext.Provider 
      value={{
        currentBloco, setCurrentBloco,
      }}
    >
      {props.children}
    </SessionContext.Provider>
  )
}