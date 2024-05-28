"use client"

import React ,{useEffect, useState} from "react"
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "next-themes"



export function ThemeChanger() {

  const [mounted,setMounted] = useState(false)
  const {setTheme,resolvedTheme } = useTheme()

  useEffect(()=> setMounted(true),[])

  if(!mounted){
    return "loading image"
  }

  if(resolvedTheme === "dark"){
    return  <MdOutlineWbSunny onClick={() => setTheme("light")} className="cursor-pointer" />
  }
  if(resolvedTheme === "light"){
    return  <FaMoon onClick={() => setTheme("dark")} className="cursor-pointer" />
  }

}
