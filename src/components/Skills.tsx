import { useState } from "react";
import { motion } from "framer-motion";

import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import js from "../assets/skills/javascript.svg";
import php from "../assets/skills/php.svg";
import ts from "../assets/skills/typescript.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import laravel from "../assets/skills/laravel.svg";
import tailwind from "../assets/skills/tailwind.svg";
import react from "../assets/skills/react.svg";
import nodejs from "../assets/skills/nodejs.svg";
import python from "../assets/skills/python.svg";
import kotlin from "../assets/skills/kotlin.svg";
import csharp from "../assets/skills/csharp.svg";
import unity from "../assets/skills/unity.svg";
import blender from "../assets/skills/blender.svg";

const Skills = () => {
    const [activeTab, setActiveTab] = useState("skills");

    const tabs = [
        { id: "skills", label: "Skills" },
        { id: "certificates", label: "Certificates" },
        { id: "projects", label: "Projects" },
    ];

    const skills = [
        { name: "HTML", logo:  html},
        { name: "CSS", logo:  css},
        { name: "JavaScript", logo:  js},
        { name: "PHP", logo:  php},
        { name: "TypeScript", logo:  ts},
        { name: "Bootstrap", logo:  bootstrap},
        { name: "Laravel", logo:  laravel},
        { name: "TailWind", logo:  tailwind},
        { name: "React", logo:  react},
        { name: "Node.Js", logo:  nodejs},
        { name: "Python", logo:  python},
        { name: "Kotlin", logo:  kotlin},
        { name: "C#", logo:  csharp},
        { name: "Unity", logo:  unity},
        { name: "Blender", logo:  blender},
    ];

    const certificates = [
        { title: "Dicoding Front-End Web", img: "" },
        { title: "Sololearn JS", img: "" },
    ];

    const projects = [
        { title: "Portfolio Website", img: "" },
        { title: "Game 2D Unity", img: "" },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "skills":
                return(
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
                        {skills.map((s, i) => (
                            <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:scale-105 transition"
                            >
                                <img src={s.logo} alt={s.name} className="w-12 h-12 mb-2" />
                                <p className="text-sm font-medium">{s.name}</p>
                            </motion.div>
                        ))}
                    </div>
                );
            case "certificates":
                return(
                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                        {certificates.map((c, i) => (
                            <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:scale-[1.02] transition"
                            >
                                <img src={c.img} alt={c.title} className="rounded-lg w-full" />
                                <p className="mt-2 text-center font-medium">{c.title}</p>
                            </motion.div>
                        ))}
                    </div>
                );
            case "projects":
                return(
                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                        {projects.map((p, i) => (
                            <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:scale-[1.02] transition"
                            >
                                <img src={p.img} alt={p.title} className="rounded-lg w-full" />
                                <p className="mt-2 text-center font-medium">{p.title}</p>
                            </motion.div>
                        ))}
                    </div>
                );
        }
    };

    return(
        <section  id="skills" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold text-center">Skills / Certificates / Projects</h2>
            <div className="flex justify-center mt-6 space-x-4">
                {tabs.map((tab) => (
                    <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${activeTab === tab.id ? "bg-futuristic-500 text-white shadow-md" : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-8">{renderContent()}</div>
        </section>
    );
};

export default Skills;