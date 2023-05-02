"use client"

import React, { useState, useContext } from "react";

const productosContext = React.createContext()
const setProductosContext = React.createContext()

const totalIndividualContext = React.createContext()
const setTotalIndividualContext = React.createContext()

const totalContext = React.createContext()
const setTotalContext = React.createContext()

export const useProductos = () => {
    return useContext(productosContext)
}

export const useSetProductos = () => {
    return useContext(setProductosContext)
}

export const useTotal = () => {
    return useContext(totalContext)
}

export const useSetTotal = () => {
    return useContext(setTotalContext)
}

export const useTotalIndividual = () => {
    return useContext(totalIndividualContext)
}

export const useSetTotalIndividual = () => {
    return useContext(setTotalContext)
}


export function UseProductosProvider({children}) {
    const [productos, setProductos] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalIndividual, setTotalIndividual] = useState([])


    const handleProductos = () => {
        return setProductos()
    }

    return (
                <productosContext.Provider value={productos}>
                    <setProductosContext.Provider value={handleProductos}>
                        <setTotalContext.Provider value={setTotal}>
                            <totalContext.Provider value={total}>
                                <totalIndividualContext.Provider value={totalIndividual}>
                                    <setTotalIndividualContext.Provider value={setTotalIndividual}>
                                        {children}
                                    </setTotalIndividualContext.Provider>
                                </totalIndividualContext.Provider>
                            </totalContext.Provider>
                        </setTotalContext.Provider>
                    </setProductosContext.Provider>
                </productosContext.Provider>
    );
}