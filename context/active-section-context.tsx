"use client";
import React, {useState, createContext,useContext} from 'react';

import {SectionName} from "@/lib/type";

type ActiveSectionContextProps = {
    children: React.ReactNode
}
export type ActiveSectionContextType = {
    activeSection: SectionName
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
    timeOfLastClick: number
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)
const ActiveSectionContextProvider = ({children}: ActiveSectionContextProps) => {
    const [activeSection, setActiveSection] = useState<SectionName>("Home")
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0)


    return (
        <ActiveSectionContext.Provider value={{activeSection, setActiveSection,timeOfLastClick,setTimeOfLastClick}}>
            {children}
        </ActiveSectionContext.Provider>
    );
};


export default ActiveSectionContextProvider;


export const useActiveSection = () => {
    const context = useContext(ActiveSectionContext)
    if (context === null) {
        throw new Error('useActiveSection must be used within a ActiveSectionContextProvider')
    }
    return context
}