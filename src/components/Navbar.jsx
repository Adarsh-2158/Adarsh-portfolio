import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import logo from "../assets/final.png"
import { FaSquareTwitter, FaSquareXTwitter, FaX, FaXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home" >
                <img src={logo} className="mx-2" width={80} height={250} alt="Logo" />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/adarsh-kumar-srivastava/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com/Adarsh-2158" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/adarshoffline/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
            </a>
            <a href="https://x.com/AdarshK30430933?t=G9W6RlYCit6csQIH_i8ksA&s=09" target="_blank" rel="noopener noreferrer" aria-label="X">
                <FaSquareXTwitter />
            </a>
        </div>
    </nav>
  )
}

export default Navbar