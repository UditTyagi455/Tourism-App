import { View, Text } from 'react-native'
import React,{FC,useState,createContext} from 'react';
import AppWriteService from './service';

type AppWriteContextType ={
    appWrite: AppWriteService;
    isLoggedIn: boolean;
    setIsLoggedIn: () => void
}

export const AppWriteContext = createContext <AppWriteContextType>({
    appWrite: new AppWriteService,
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})


export const AppWriteProvider: FC<PropsWithChildren> = ({children}) => {

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const  defaultValue = {
        appWrite: new AppWriteService(),
        isLoggedIn,
        setIsLoggedIn
    }
  return (
    <AppWriteContext.Provider value={defaultValue}>
      {children}
    </AppWriteContext.Provider>
  )
}

