import React, { createContext, useState, useEffect } from 'react'
//aqui listamos toda la funcionalidad que vienen desde los services
import gameAlert from './services/gameAlertService'
//import Connect from './services/connectService'
import resumeWallet from './services/resumeWallet'

export const DataContext = createContext()
export const DataProvider = ({ children }) => {

    const [wallet, setWallet] = useState("")

    const Connect = () => {
        window.ethereum.request({ method: "eth_requestAccounts" })
            .then(res => setWallet(res[0]))
            .catch(error => alert(error.message))
    }
    useEffect(() => {
        Connect()
    }, [])

    const functionsOBJ = {
        gameAlert,
        Connect,
        wallet,
        resumeWallet
    }

    return (
        <DataContext.Provider value={functionsOBJ}>
            {children}
        </DataContext.Provider>
    )
}