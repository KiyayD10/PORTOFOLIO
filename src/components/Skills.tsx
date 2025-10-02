import { useState } from "react";
import { motion } from "framer-motion";

type ImageModule = { default: string };

const skillIcons = Object.entries(
    import.meta.glob<ImageModule>("../assets/skills/*.{svg,png,jpg,jpeg}", { eager: true })
).map(([path, mod]) => {
    const name = path.split("/").pop()?.split(".")[0] || "";
    return { name, logo: mod.default };
});

const certificates = Object.entries(
    import.meta.glob<ImageModule>("../assets/certificates/*.{svg,png,jpg,jpeg}", { eager: true })
).map(([path, mod]) => {
    const title = path.split("/").pop()?.split(".")[0] || "";
    return { title, img: mod.default };
});

const projects = Object.entries(
    import.meta.glob<ImageModule>("../assets/projects/*.{svg,png,jpg,jpeg}", { eager: true })
).map(([path, mod]) => {
    const title = path.split("/").pop()?.split(".")[0] || "";
    return { title, img: mod.default };
});

const Skills = () => {
    const [activeTab, setActiveTab] = useState("skills");

    const tabs = [
        { id: "skills", label: "SKILLS", icon: "⚡" },
        { id: "certificates", label: "CERTIFICATES", icon: "🏆" },
        { id: "projects", label: "PROJECTS", icon: "🚀" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "skills":
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8"
                    >
                        {skillIcons.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: "0 0 30px rgba(0, 255, 255, 0.3)",
                                    borderColor: "rgba(0, 255, 255, 0.5)",
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="group flex flex-col items-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <motion.img
                                    src={s.logo}
                                    alt={s.name}
                                    className="w-12 h-12 mb-3 relative z-10"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8 }}
                                />
                                <p className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300 relative z-10">
                                    {s.name.toUpperCase()}
                                </p>

                                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyan-400/30 group-hover:border-cyan-400 transition-colors duration-300"></div>
                                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-purple-400/30 group-hover:border-purple-400 transition-colors duration-300"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                );

            case "certificates":
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid sm:grid-cols-2 gap-8 mt-8"
                    >
                        {certificates.map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9, rotateX: 45 }}
                                whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-purple-400/20 hover:border-purple-400/50 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <motion.img
                                    src={c.img}
                                    alt={c.title}
                                    className="rounded-lg w-full relative z-10 border border-gray-600 group-hover:border-purple-400/50 transition-colors duration-300"
                                    whileHover={{ scale: 1.02 }}
                                />
                                <motion.p
                                    className="mt-4 text-center font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300 relative z-10"
                                    initial={{ opacity: 0.7 }}
                                    whileHover={{ opacity: 1 }}
                                >
                                    {c.title.replace(/[-_]/g, " ").toUpperCase()}
                                </motion.p>
                            </motion.div>
                        ))}
                    </motion.div>
                );

            case "projects":
                return (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
                    >
                        {projects.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)",
                                }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <motion.img
                                    src={p.img}
                                    alt={p.title}
                                    className="rounded-lg w-full h-48 object-cover relative z-10 border border-gray-600 group-hover:border-cyan-400/50 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                />

                                <motion.div className="mt-4 relative z-10">
                                    <p className="text-center font-medium text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                                        {p.title.replace(/[-_]/g, " ").toUpperCase()}
                                    </p>

                                    <div className="flex justify-center mt-2">
                                        <span className="px-3 py-1 text-xs bg-green-500/20 text-green-400 border border-green-500/30 rounded-full">
                                            COMPLETED
                                        </span>
                                    </div>
                                </motion.div>

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium text-sm"
                                    >
                                        VIEW PROJECT
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <section id="skills"
            className="py-20 px-6 md:px-12 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            &gt; PORTFOLIO_DATA
                        </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-8 flex-wrap gap-4"
                >
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                                activeTab === tab.id ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg border border-cyan-400/50" : "bg-slate-800/50 text-gray-300 border border-gray-600 hover:border-cyan-400/50 hover:text-cyan-400"
                            }`}
                        >
                            <span className="relative z-10 flex items-center space-x-2">
                                <span>{tab.icon}</span>
                                <span>{tab.label}</span>
                            </span>
                            {activeTab !== tab.id && (
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            )}
                        </motion.button>
                    ))}
                </motion.div>

                <div className="mt-8">{renderContent()}</div>
            </div>
        </section>
    );
};

export default Skills;
