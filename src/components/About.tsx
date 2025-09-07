import { motion } from "framer-motion";
import profile from "../assets/Profile.jpg";

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-40"></div>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex justify-center relative"
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 blur-xl animate-pulse"></div>
                    
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative"
                    >
                        <img 
                            src={profile} 
                            alt="Robani Diansyah" 
                            className="rounded-2xl shadow-2xl w-64 md:w-80 object-cover border-2 border-cyan-400/30 relative z-10"
                        />
                        <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400"></div>
                        <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400"></div>
                        <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-purple-500"></div>
                        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-purple-500"></div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="space-y-6"
                >
                    <div className="relative">
                        <h2 className="text-4xl md:text-5xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                &gt; TENTANG_SAYA
                            </span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-8"></div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="space-y-4"
                    >
                        <p className="text-lg leading-relaxed text-gray-300 bg-slate-800/50 p-6 rounded-lg border-l-4 border-cyan-400/50 backdrop-blur-sm">
                            <span className="text-cyan-400 font-mono">console.log(</span>
                            <span className="text-white">"Halo, saya "</span>
                            <span className="text-purple-400 font-semibold">Robani Diansyah</span>
                            <span className="text-white">, seorang "</span>
                            <span className="text-cyan-400">Fullstack Developer</span>
                            <span className="text-white">" sekaligus "</span>
                            <span className="text-purple-400">Game Developer</span>
                            <span className="text-white">" dengan minat mendalam dalam membangun aplikasi modern, interaktif, dan efisien."</span>
                            <span className="text-cyan-400 font-mono">);</span>
                        </p>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-lg leading-relaxed text-gray-300 bg-slate-800/50 p-6 rounded-lg border-l-4 border-purple-400/50 backdrop-blur-sm"
                        >
                            <span className="text-cyan-400 font-mono">//</span> Saya berfokus pada pengembangan front-end dan back-end untuk menghadirkan solusi digital yang fungsional, sekaligus menyalurkan kreativitas melalui pengembangan game menggunakan Unity dan Blender.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex flex-wrap gap-3 mt-6"
                    >
                        {["React", "Unity", "Node.js", "Blender"].map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 rounded-full border border-cyan-400/30 text-sm font-medium backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + i * 10}%`,
                    }}
                />
            ))}
        </section>
    );
};

export default About;
