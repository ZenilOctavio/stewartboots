'use client'
import clsx from "clsx";
import {  useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Image from "next/image";

export function Header() {

  const [isScrolled, setIsScrolled] = useState(false)
   useEffect(() => {
    const handleScrollCallback = () => {
      if (window.scrollY > 50 && !isScrolled) {
        setIsScrolled(true)
      } else if (window.scrollY <= 50 && isScrolled) {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScrollCallback)

    return () => {
      window.removeEventListener('scroll', handleScrollCallback)
    }
  },[isScrolled])

  return (
    <header
      className={
        clsx(
          "bg-backgroundSecondary z-40 flex justify-center items-center px-4 pb-4 md:pb-0 fixed top-0 left-0 w-full",
          "md:flex-col",
        )
      }
    >
      <picture className="flex flex-col items-center basis-11/12">
        <Image
          src="/stwboot-logo.png"
          width={400}
          alt="Stewart Boot Logo"
          height={150}
          className={clsx("h-full w-full object-contain duration-300", {"md:scale-75": isScrolled})}
        />
      </picture>
      <Navbar className={clsx("w-full mt-14 self-end basis-1/12 transition-all duration-300", {"md:mt-0": isScrolled})} />
    </header>
  )
}