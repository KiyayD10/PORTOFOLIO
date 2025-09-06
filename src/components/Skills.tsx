import { useState } from "react";
import { motion } from "framer-motion";

import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/javascript.jpg";
import php from "../assets/skills/php.png";
import ts from "../assets/skills/typescript.png";
import bootstrap from "../assets/skills/bootstrap.png";
import laravel from "../assets/skills/laravel.png";
import tailwind from "../assets/skills/tailwind.png";
import react from "../assets/skills/react.png";
import nodejs from "../assets/skills/nodejs.png";
import python from "../assets/skills/python.jpg";
import kotlin from "../assets/skills/kotlin.jpg";
import csharp from "../assets/skills/csahrp.png";
import unity from "../assets/skills/unity.png";
import blender from "../assets/skills/blender.png";

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
                    <div>
                        {skills.map((s, i) => (
                            <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <img src={s.logo} alt={s.name} />
                                <p>{s.name}</p>
                            </motion.div>
                        ))}
                    </div>
                );
            case "certificates":
                return(
                    <div>
                        {certificates.map((c, i) => (
                            <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <img src={c.img} alt={c.title} />
                                <p>{c.title}</p>
                            </motion.div>
                        ))}
                    </div>
                );
            case "projects":
                return(
                    <div>
                        {projects.map((p, i) => (
                            <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <img src={p.img} alt={p.title} />
                                <p>{p.title}</p>
                            </motion.div>
                        ))}
                    </div>
                );
        }
    };

    return(
        <section>
            <h2>Skills / Certificates / Projects</h2>

            <div>
                {tabs.map((tab) => (
                    <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div>{renderContent()}</div>
        </section>
    );
};

export default Skills;