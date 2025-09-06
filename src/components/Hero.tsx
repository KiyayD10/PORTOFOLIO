import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
    return(
        <section id="home"
        className="h-screen flex items-center justify-center text-center bg-gradient-to-b from-black to-gray-900 dark:from-white dark:to-gray-100"
        >
            <motion.div
            initial={{ opacity: 0, y: 40}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Hi, I&apos;m <span className="text-futuristic-500">Robani Diansyah</span>
                </h1>
                <TypeAnimation
                sequence={[
                    "Full-Stack Developer", 2000,
                    "Game Developer", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl text-futuristic-500"/>
            </motion.div>
        </section>
    );
};

export default Hero;