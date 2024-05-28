"use client"

import React ,{useEffect, useState} from "react"
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from "next-themes"



export function ThemeChanger() {

  const [mounted,setMounted] = useState(false)
  const {theme, setTheme,resolvedTheme } = useTheme()

  console.log(theme,"them",resolvedTheme)
  useEffect(()=> setMounted(true),[])

  if(!mounted){
    return <MdOutlineWbSunny onClick={() => setTheme("light")}  />
  }

  if(resolvedTheme === "dark"){
    return  <MdOutlineWbSunny onClick={() => setTheme("light")}  />
  }
  if(resolvedTheme === "light"){
    return  <FaMoon onClick={() => setTheme("dark")}  />
  }

}
