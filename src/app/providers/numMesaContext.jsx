"use client"

import React, { useState, useContext } from "react";

const mesaBillarContext = React.createContext()
const setMesaBillarContext = React.createContext()

const mesaDominoContext = React.createContext()
const setMesaDominoContext = React.createContext()

const setMostrar = React.createContext()
const mostrar = React.createContext()

export const useMesaBillar = () => {
    return useContext(mesaBillarContext)
}

export const useSetMesaBillar = () => {
    return useContext(setMesaBillarContext)
}

export const useMesaDomino = () => {
    return useContext(mesaDominoContext)
}

export const useSetMesaDomino = () => {
    return useContext(setMesaDominoContext)
}

export const useMostrar = () => {
    return useContext(mostrar)
}

export const useSetMostrar = () => {
    return useContext(setMostrar)
}


export function UseNumMesaProvider({children}) {

    const [mesaBillar, setMesaBillar] = useState(0);
    const [mesaDomino, setMesaDomino] = useState(0);
    const [mostrarBoton, setMostrarBoton] = useState(false)

    const handleMostrar = () => {
        return setMostrarBoton(!mostrarBoton)
    }

    const handleBillar = () => {
        return setMesaBillar(mesaBillar + 1)
    }

    const handleDomino = () => {
        return setMesaDomino(mesaDomino + 1)
    }

    return (
        <mesaBillarContext.Provider value={mesaBillar}>
            <setMesaBillarContext.Provider value={handleBillar}>
                <mesaDominoContext.Provider value={mesaDomino}>
                    <setMesaDominoContext.Provider value={handleDomino}>
                        <setMostrar.Provider value={handleMostrar}>
                            <mostrar.Provider value={mostrarBoton}>
                                {children}
                            </mostrar.Provider>
                        </setMostrar.Provider>
                    </setMesaDominoContext.Provider>
                </mesaDominoContext.Provider>
            </setMesaBillarContext.Provider>
        </mesaBillarContext.Provider>
    );
}