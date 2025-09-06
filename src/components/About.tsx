import {motion} from "framer-motion";

const About = () => {
    return(
        <section id="about"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-black to-gray-900 dark:from-gray-100 dark:via-white dark:to-gray-200 px-6 py-20">
            <div className="max-w-4xl text-center">
                <motion.h2
                className="text-4xl md:text-5xl font-extrabold text-futuristic-500 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                >
                    Tentang Saya
                </motion.h2>

                <motion.p
                className="text-lg md:text-xl text-gray-300 dark:text-gray-800 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                >
                    Halo, saya <span className="font-semibold text-futuristic-500">Robani Diansyah</span> - seorang <span className="font-semibold">Full-Stack Developer</span> dan{" "} <span className="font-semibold">Game Developer</span> yang memiliki passion besar dalam membangun aplikasi modern serta pengalaman digital yang interaktif.
                </motion.p>

                <motion.p
                className="mt-6 text-lg md:text-xl text-gray-300 dark:text-gray-800 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                >
                    Saya terbiasa mengembangkan <span className="font-semibold">front-end</span> dan{" "} <span className="font-semibold">back-end</span> untuk menghadirkan solusi web yang tidak hanya <span className="italic">fungsional</span> dan <span className="italic">efisien</span>, tetapi juga memiliki desain yang <span className="italic">elegan</span> dan{" "} <span className="italic">user-friendly</span>.
                </motion.p>

                <motion.p
                className="mt-6 text-lg md:text-xl text-gray-300 dark:text-gray-800 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
                >
                    Selain itu, saya juga menggabungkan sisi kreativitas melalui{" "} <span className="font-semibold">pengembangan game</span> menggunakan{" "} <span className="font-semibold">Unity</span> dan <span className="font-semibold">Blender</span>, menciptakan dunia virtual yang imersif dan seru untuk dijelajahi.
                </motion.p>
                
                <motion.p
                className="mt-6 text-lg md:text-xl text-gray-300 dark:text-gray-800 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                >       
                    Bagi saya, teknologi bukan sekadar alat, melainkan media untuk{" "} <span className="font-semibold">menghadirkan pengalaman</span> dan{" "} <span className="font-semibold">menciptakan inovasi</span> yang bermanfaat bagi banyak orang.
                </motion.p>
            </div>
        </section>
    );
};

export default About;