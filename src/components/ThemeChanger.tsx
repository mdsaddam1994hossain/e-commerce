"use client"

import * as React from "react"
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

import { useTheme } from "next-themes"



export function ThemeChanger() {
  const {theme, setTheme } = useTheme()

  console.log(theme,"them")

  return (
    <div>
     
     
          <MdOutlineWbSunny onClick={() => setTheme("light")} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <FaMoon onClick={() => setTheme("dark")} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
         
    
  

      
    </div>
  )
}
