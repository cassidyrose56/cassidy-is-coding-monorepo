import { useState } from 'react'
import Navlink from "../atoms/Navlink"

type NavLinkProps = {
  elId: string
  children: React.ReactNode
}

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks: NavLinkProps[] = [
    { elId: "about", children: "About" },
    { elId: "experience", children: "Experience" },
    { elId: "projects", children: "Projects" },
    { elId: "contact", children: "Contact" },
  ]

  return (
    <nav className="sticky top-0 p-4 w-full">
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:w-3/5 lg:w-1/3 mx-auto">
          {navLinks.map((link) => (
            <Navlink key={link.elId} elId={link.elId}>
              {link.children}
            </Navlink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Nav