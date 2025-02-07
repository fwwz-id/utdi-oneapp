"use client";

import React, { createContext, useContext, useState } from 'react';

type DashboardContextType = {
    title: string;
    setTitle: (title: string) => void;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: () => void;
};

const DashboardContenxt = createContext({} as DashboardContextType);

export const useDashboard = () => useContext(DashboardContenxt);

const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
    const [title, setTitle] = useState('App Bar');
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen((state) => !state);

    return (
        <DashboardContenxt.Provider value={{ title, setTitle, isOpen, setIsOpen, toggle }}>
            {children}
        </DashboardContenxt.Provider>
    );
}

export default DashboardProvider;