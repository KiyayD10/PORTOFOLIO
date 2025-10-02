import { motion } from "framer-motion";
import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-12 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900 to-slate-800">
                <div
                    className="absolute inset-0 opacity-50"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300FFFF' fill-opacity='0.02'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mb-8"
                    >
                        <h3 className="text-3xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                ROBANI DIANSYAH
                            </span>
                        </h3>
                        <div className="text-gray-400 text-sm uppercase tracking-wider space-y-1 mx-auto w-fit">
                            {[
                                "Full-Stack Developer",
                                "Software Engineer",
                                "Game Developer",
                                "Cybersecurity Enthusiast",
                            ].map((role, index) => (
                                <div key={index} className="grid grid-cols-[auto,1fr] gap-2 justify-center">
                                    <span className="text-cyan-400 font-mono"></span>
                                    <span  className="ml-2">{role}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent max-w-md mx-auto"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 mb-8"
                    >
                        {["React", "TypeScript", "Unity", "NextJs", "PostgreSQL", "TailwindCSS"].map(
                            (tech) => (
                                <motion.span
                                    key={tech}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="px-3 py-1 bg-slate-800/50 border border-cyan-400/20 rounded-full text-xs text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm"
                                >
                                    {tech}
                                </motion.span>
                            )
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                            <span className="text-cyan-400 font-mono">console.log(</span>
                            <span>"Made with"</span>
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative"
                            >
                                <Heart className="w-4 h-4 text-red-400 fill-current" />
                            </motion.div>
                            <span>&</span>
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Code className="w-4 h-4 text-cyan-400" />
                            </motion.div>
                            <span>& lots of</span>
                            <motion.div
                                animate={{ y: [0, -2, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <Coffee className="w-4 h-4 text-yellow-600" />
                            </motion.div>
                            <span className="text-cyan-400 font-mono">);</span>
                        </div>

                        <p className="text-gray-500 text-sm">
                            <span className="text-cyan-400 font-mono">© {currentYear}</span>{" "}
                            <span className="text-white">Robani Diansyah</span>
                            <span className="text-gray-500">. Built with </span>
                            <span className="text-cyan-400">React</span>
                            <span className="text-gray-500"> & </span>
                            <span className="text-purple-400">TailwindCSS</span>
                            <span className="text-gray-500">. All rights reserved.</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="pt-4"
                    >
                        <p className="text-xs text-gray-600 font-mono">
                            <span className="text-cyan-400">// </span>
                            "In a world of 1s and 0s, I create experiences that matter"
                        </p>
                    </motion.div>
                </motion.div>

                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 10, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 6 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1.2,
                        }}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            bottom: `${10 + i * 5}%`,
                        }}
                    />
                ))}

                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/20"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-purple-400/20"></div>
            </div>
        </footer>
    );
};

export default Footer;
