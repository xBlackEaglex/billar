"use client"

import React, { useState, useContext } from "react";

const mezaBillarContext = React.createContext()
const setMezaBillarContext = React.createContext()

const mezaDominoContext = React.createContext()
const setMezaDominoContext = React.createContext()

const setMostrar = React.createContext()
const mostrar = React.createContext()

export const useMezaBillar = () => {
    return useContext(mezaBillarContext)
}

export const useSetMezaBillar = () => {
    return useContext(setMezaBillarContext)
}

export const useMezaDomino = () => {
    return useContext(mezaDominoContext)
}

export const useSetMezaDomino = () => {
    return useContext(setMezaDominoContext)
}

export const useMostrar = () => {
    return useContext(mostrar)
}

export const useSetMostrar = () => {
    return useContext(setMostrar)
}


export function UseNumMezaProvider({children}) {

    const [mezaBillar, setMezaBillar] = useState(0);
    const [mezaDomino, setMezaDomino] = useState(0);
    const [mostrarBoton, setMostrarBoton] = useState(false)

    const handleMostrar = () => {
        return setMostrarBoton(!mostrarBoton)
    }

    const handleBillar = () => {
        return setMezaBillar(mezaBillar + 1)
    }

    const handleDomino = () => {
        return setMezaDomino(mezaDomino + 1)
    }

    return (
        <mezaBillarContext.Provider value={mezaBillar}>
            <setMezaBillarContext.Provider value={handleBillar}>
                <mezaDominoContext.Provider value={mezaDomino}>
                    <setMezaDominoContext.Provider value={handleDomino}>
                        <setMostrar.Provider value={handleMostrar}>
                            <mostrar.Provider value={mostrarBoton}>
                                {children}
                            </mostrar.Provider>
                        </setMostrar.Provider>
                    </setMezaDominoContext.Provider>
                </mezaDominoContext.Provider>
            </setMezaBillarContext.Provider>
        </mezaBillarContext.Provider>
    );
}