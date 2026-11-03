import React,{useEffect,useState} from 'react';

export default function ThemeToggle() {
    const[isDark, setIsDark]= useState(()=>{
        const saved = localStorage.getItem("theme");
        if(saved) return saved === "dark";
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(()=>{
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);
    
    return(
        <button 
        onClick={()=> setIsDark(!isDark)}
        aria-label="Toggle Dark Mode"
        id="mode"
        className="w-8 h-8 flex items-center justify-center-full">
            {isDark ? "☀️" : "🌙"}
        </button>
    )
}