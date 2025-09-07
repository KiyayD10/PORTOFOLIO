import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
    return(
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/30"
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center py-4">
                <motion.h1 
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                >
                    PORTFOLIO
                </motion.h1>
                <ul className="hidden md:flex space-x-8">
                    {["Home", "About", "Skills", "Gallery", "Contact"].map((item) => (
                        <motion.li 
                            key={item}
                            whileHover={{ y: -2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group text-sm font-medium uppercase tracking-wider"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;