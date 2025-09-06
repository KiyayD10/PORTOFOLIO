import {motion} from "framer-motion";

const About = () => {
    return(
        <section id="about">
            <div>
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                >
                    Tentang Saya
                </motion.h2>
                <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                >
                    Halo, saya <span>Robani Diansyah</span> - seorang <span>Full-Stack Developer</span> dan{" "} <span>Game Developer</span> yang memiliki passion besar dalam membangun aplikasi modern serta pengalaman digital yang interaktif.
                </motion.p>
                <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                >
                    Saya terbiasa mengembangkan <span>front-end</span> dan{" "} <span>back-end</span> untuk menghadirkan solusi web yang tidak hanya <span>fungsional</span> dan <span>efisien</span>, tetapi juga memiliki desain yang <span>elegan</span> dan{" "} <span>user-friendly</span>.
                </motion.p>
                <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
                >
                    Selain itu, saya juga menggabungkan sisi kreativitas melalui{" "} <span>pengembangan game</span> menggunakan{" "} <span>Unity</span> dan <span>Blender</span>, menciptakan dunia virtual yang imersif dan seru untuk dijelajahi.
                </motion.p>
                <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6 }}
                >       
                    Bagi saya, teknologi bukan sekadar alat, melainkan media untuk{" "} <span>menghadirkan pengalaman</span> dan{" "} <span>menciptakan inovasi</span> yang bermanfaat bagi banyak orang.
                </motion.p>
            </div>
        </section>
    );
};

export default About;