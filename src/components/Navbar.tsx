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
        <nav className="fixed top-0 left-0 w-full bg-black/60 dark:bg-white/60 backdrop-blur-md z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold text-futuristic-500">Portfolio</h1>
                <ul className="hidden md:flex space-x-6">
                    {["Home", "About", "Skills", "Certificates", "Projects", "Gallery", "Contact"].map((item) => (
                        <li key={item}>
                            <Link
                            to={item.toLocaleLowerCase()}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-futuristic-500 transition"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button onClick={toggleDarkMode} className="ml-6">
                    {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-futuristic-500" />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;