import React, {
    createContext,
    useState,
    useContext,
    Dispatch,
    SetStateAction,
  } from 'react'

type ContextType = {
    amount: number,
    setAmount: Dispatch<SetStateAction<number>>
  }

  const globalContextType: ContextType = {
    amount: 0,
    setAmount: null,
  }

  const GlobalContext = createContext(globalContextType)

  interface Props {
    children: React.ReactNode;
  }

  export const GlobalProvider: React.FC<Props> = ({ children }) => {
    const [amount, setAmount] = useState(0)
    const value: ContextType = { amount, setAmount}
    return (
      <GlobalContext.Provider value={value}>{ children }</GlobalContext.Provider>
    )
  }
  
  export const useGlobal = (): ContextType => {
    const context = useContext(GlobalContext)
    if (!context) {
      throw new Error('GlobalContext errors')
    }
    return context
  }