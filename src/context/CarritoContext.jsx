import { createContext } from "react";


const CarritoContext = createContext({

});

export function CarritoProvider({children}){
    return (
        <CarritoContext.Provider value={{

        }}>
            {children}
            </CarritoContext.Provider>
    )
}