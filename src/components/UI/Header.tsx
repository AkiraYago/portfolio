"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavToggle = () => setIsOpen(!isOpen)

  return (
    <header className={`fixed md:static w-full z-10 ${isOpen && "bg-black/60 md:bg-transparent"}`}>
      <section className="flex justify-end p-4 md:hidden">
        <button className="bg-c-dblue p-2 rounded-md" onClick={handleNavToggle}>
          <Image width={40} height={40} src="/icons/hamb-menu.svg" alt="menu" />
        </button>
      </section>
      <section className={`${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} md:opacity-100 md:pointer-events-auto transition-opacity duration-300 ease-in-out bg-black/60 md:bg-transparent flex-col md:flex-row text-white flex justify-center w-full max-w-5xl p-4 justify-self-center`}>
        <Link className="min-w-[200px] transition-all duration-300 ease-in-out border-b-4 border-white/0 hover:border-white/100 text-buttons text-center p-buttons" href="#about">About</Link>
        <Link className="min-w-[200px] transition-all duration-300 ease-in-out border-b-4 border-white/0 hover:border-white/100 text-buttons text-center p-buttons" href="#experience">Experience</Link>
        <Link className="min-w-[200px] transition-all duration-300 ease-in-out border-b-4 border-white/0 hover:border-white/100 text-buttons text-center p-buttons" href="#projects">Projects</Link>
      </section>
    </header>
  )
}

export default Header