import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
    return(
        <section id="home">
            <motion.div
            initial={{ opacity: 0, y: 40}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
                <h1>
                    Hi, I&apos;m <span>Robani Diansyah</span>
                </h1>
                <TypeAnimation
                sequence={[
                    "Full-Stack Developer", 2000,
                    "Game Developer", 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </motion.div>
        </section>
    );
};

export default Hero;