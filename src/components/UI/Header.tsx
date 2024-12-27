import Link from "next/link"

const Header = () => {
  return (
    <header className="text-white p-header-phone md:p-header-tablet lg:p-header-desktop flex justify-center">
      <nav className="flex flex-col h-fit sm:flex-row sm:justify-center items-center gap-8 w-full max-w-maximum sm:h-[8svh]">
        <Link className="hover:border-b-4 text-buttons w-[200px] text-center h-fit p-buttons" href="#about">About</Link>
        <Link className="hover:border-b-4 text-buttons w-[200px] text-center h-fit p-buttons" href="#experience">Experience</Link>
        <Link className="hover:border-b-4 text-buttons w-[200px] text-center h-fit p-buttons" href="#projects">Projects</Link>
      </nav>
    </header>
  )
}

export default Header