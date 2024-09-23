import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navlink from "../atoms/Navlink"

gsap.registerPlugin(ScrollTrigger)

type NavLinkProps = {
  elId: string
  children: React.ReactNode
}

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks: NavLinkProps[] = [
    { elId: "about", children: "About" },
    { elId: "experience", children: "Experience" },
    { elId: "projects", children: "Projects" },
    { elId: "contact", children: "Contact" },
  ]

  useGSAP(() => {
    const hideNav = gsap.from(navRef.current, {
      yPercent: -100,
      paused: true,
      duration: 0.4
    }).progress(1)

    const tl = gsap.timeline({ 
      defaults: { duration: 0.4 },
    })
      .from(navRef.current, { backgroundColor: "#FFF2F1", opacity: 0.9 })
      .from("nav ul li a", { color: "#36593F" }, "<")

    ScrollTrigger.create({
      start: "60px",
      end: "bottom bottom",
      onEnter: () => tl.reverse(),
      onLeaveBack: () => tl.play(),
      onUpdate: (self) => {
        return self.direction === -1 ? hideNav.play() : hideNav.reverse()
      }
    })
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 p-4 w-full z-50 bg-white bg-opacity-90">
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <ul className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:w-3/5 lg:w-1/3 mx-auto">
          {navLinks.map((link) => (
            <li key={link.elId}>
              <Navlink elId={link.elId}>
                {link.children}
              </Navlink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav