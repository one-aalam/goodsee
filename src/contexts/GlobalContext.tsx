import React, { createContext } from 'react';

export const initialValues = {
    userName: 'John Doe'
};

export const GlobalContext = createContext(initialValues);

export const GlobalProvider: React.FC = ({ children }) => {
    return (
        <GlobalContext.Provider value={initialValues}>
            { children }
        </GlobalContext.Provider>
    )
}
