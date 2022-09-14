import { navLinks } from "../config/NavLinks"
import NavLink from "./NavLink"
import { GrClose } from './Icons'
import useWindowSize from "../hooks/useWindowSize"
const NavBar = ({ handleNavBar } : { handleNavBar: () => void}) => {
  const { width } = useWindowSize()
  return (
    <nav className="fixed top-0 bottom-0 z-[1000] right-0 w-[70%] md:w-fit md:static flex flex-col md:flex-row gap-4 md:gap-8 md:items-center bg-[#eee] md:bg-white p-8 md:p-0 text-xl md:text-base ">
      {width! < 768 && 
        <div className="flex justify-end">
          <button onClick={() => handleNavBar()} className="p-2" title="Close Navbar"><GrClose /></button>
        </div>
      }
      {navLinks.map(({ link, text, subLinks}, index) => (
        <NavLink link={link} subLinks={subLinks} text={text} key={index} />
      ))}
    </nav>
  )
}

export default NavBar