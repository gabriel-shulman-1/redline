import React, { createContext, useState } from 'react';
export const planChose = createContext();
export const PlanProvider = ({ children }) => {
    const [plan, setPlan] = useState(null);
    const m1 = (n) => {
        sessionStorage.setItem('number', JSON.stringify(n))
        localStorage.setItem('number', JSON.stringify(n))
    }
    m1(plan)
    return(
        <planChose.Provider value={{plan, setPlan}}>
            {children}
        </planChose.Provider>
    )
}