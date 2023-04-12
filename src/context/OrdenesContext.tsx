import React, { createContext, useReducer } from 'react';
import { OrdenesReducer } from './OrdenesReducer';

//Definir que informacion grabar
export interface OrdenesState {
    orden: string,
    lavado: string,
    medida: string
}

//Estado inicial
export const ordenesInitialState: OrdenesState = {
    orden: '',
    lavado: '',
    medida: ''
}

export interface OrdenesContextProps {
    ordenesState: OrdenesState;
    changeOrden: (medida: string) => void;
    changeLavado: (lavado: string) => void;
    changemedida: (medida: string) => void;
}

//Crear el contexto
export const OrdenesContext = createContext({} as OrdenesContextProps)

export const OrdenesProvider = ({ children }: any) => {
    const [ordenesState, dispatch] = useReducer(OrdenesReducer, ordenesInitialState)
    const changeOrden = (orden: string) => {
        dispatch({ type: 'changeOrden', payload: orden })
    }
    const changeLavado = (lavado: string) => {
        dispatch({ type: 'changeLavado', payload: lavado })
    }
    const changemedida = (medida: string) => {
        dispatch({ type: 'changeMedida', payload: medida })
    }

    return (
        <OrdenesContext.Provider value={{
            ordenesState: ordenesState,
            changeOrden,
            changeLavado,
            changemedida
        }}>
            {children}
        </OrdenesContext.Provider>
    )
}