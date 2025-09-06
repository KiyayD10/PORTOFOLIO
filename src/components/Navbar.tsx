import { Link } from "react-scroll";
import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark", !darkMode);
    };

    return(
        <nav>
            <div>
                <h1>Portfolio</h1>
                <ul>
                    {["Home", "About", "Skills", "Certificates", "Projects", "Gallery", "Contact"].map((item) => (
                        <li key={item}>
                            <Link
                            to={item.toLocaleLowerCase()}
                            smooth={true}
                            duration={500}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button onClick={toggleDarkMode}>
                    {darkMode ? <Sun /> : <Moon />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;