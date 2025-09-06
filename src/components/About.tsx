import {motion} from "framer-motion";
import profile from "../assets/Profile.jpg"

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center"
                    >
                        <img src={profile} alt="Robani Diansyah" className="rounded-2xl shadow-lg w-64 md:w-80 object-cover"/>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white"
                    >
                        Tentang Saya
                    </h2>
                    <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        Halo, saya <span className="font-semibold">Robani Diansyah</span>, seorang <span className="text-futuristic-500">Fullstack Developer</span> sekaligus <span className="text-futuristic-500">Game Developer</span> dengan minat mendalam dalam membangun aplikasi modern, interaktif, dan efisien.
                    </p>
                    <p className="text-lg leading-relaxed mt-4 text-gray-700 dark:text-gray-300">
                        Saya berfokus pada pengembangan front-end dan back-end untuk menghadirkan solusi digital yang fungsional, sekaligus menyalurkan kreativitas melalui pengembangan game menggunakan Unity dan Blender.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
