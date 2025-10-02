import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20">
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 animate-pulse"></div>
            </div>

            <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-2/3 h-0.5 bg-gradient-to-l from-transparent via-purple-500 to-transparent animate-pulse"></div>
            
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10"
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, type: "spring" }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                            Robani Diansyah
                        </span>
                    </h1>
                </motion.div>

                <div className="text-2xl md:text-4xl mb-8">
                    <TypeAnimation
                        sequence={[
                            "// Full-Stack Developer",
                            2000,
                            "// Game Developer",
                            2000,
                            "// Software Developer",
                            2000,
                            "// CyberSecurity Enthusiast",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-cyan-400 font-mono"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="flex space-x-4 justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00FFFF" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg border border-cyan-400/50 shadow-lg backdrop-blur-sm transition-all duration-300"
                    >
                        VIEW PROJECTS
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px #8B5CF6" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
                    >
                        CONTACT ME
                    </motion.button>
                </motion.div>
            </motion.div>

            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-400/30 rounded-full"
            ></motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-32 right-16 w-16 h-16 border border-purple-500/40 transform rotate-45"
            ></motion.div>
        </section>
    );
};

export default Hero;
