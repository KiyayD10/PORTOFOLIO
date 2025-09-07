import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "robanidiansyah8@gmail.com",
            href: "mailto:robanidiansyah8@gmail.com",
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+62 821 7690 4205",
            href: "tel:+6282176904205",
        },
        { icon: MapPin, label: "Location", value: "Lampung, Indonesia", href: "#" },
    ];

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/KiyayD10" },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/robani-diansyah-8b20082a6/",
        },
        {   
            icon: Instagram,
            label: "Instagram",
            href: "https://www.instagram.com/robani_d10/",
        },
    ];

    return (
        <section id="contact" className="py-20 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-cyan-900/20 to-purple-900/20">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-40"></div>
            </div>

            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
                <div className="absolute bottom-1/4 right-0 w-2/3 h-px bg-gradient-to-l from-transparent via-purple-400/20 to-transparent"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                            &gt; CONNECT_WITH_ME
                        </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        <span className="text-cyan-400 font-mono">//</span> Mari berkolaborasi dan wujudkan ide-ide digital yang luar biasa
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-6">
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-lg text-gray-300 bg-slate-800/50 p-6 rounded-lg border-l-4 border-cyan-400/50 backdrop-blur-sm"
                            >
                                <span className="text-cyan-400 font-mono">console.log(</span>
                                <span className="text-white">
                                    "Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya!"
                                </span>
                                <span className="text-cyan-400 font-mono">);</span>
                            </motion.p>

                            <div className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <motion.a
                                        key={index}
                                        href={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                        whileHover={{ x: 10, scale: 1.02 }}
                                        className="flex items-center space-x-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-lg border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors duration-300">
                                            <item.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-400 uppercase tracking-wide">
                                                {item.label}
                                            </p>
                                            <p className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-300">
                                                {item.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="pt-6"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-300">
                                <span className="text-cyan-400">&lt;</span>
                                Social Networks
                                <span className="text-cyan-400">/&gt;</span>
                            </h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{
                                            y: -5,
                                            scale: 1.1,
                                            boxShadow: "0 10px 30px rgba(6, 182, 212, 0.3)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center border border-cyan-400/30 hover:border-cyan-400/70 transition-all duration-300 group"
                                    >
                                        <social.icon className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur opacity-50"></div>

                        <motion.form
                            className="relative space-y-6 bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-cyan-400/30 shadow-2xl"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    <span className="text-cyan-400">{"< "}</span>
                                    Send Message
                                    <span className="text-cyan-400">{" />"}</span>
                                </h3>
                                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <span className="text-cyan-400">const</span> name =
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-4 rounded-lg bg-slate-900/50 border border-gray-600 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <span className="text-cyan-400">const</span> email =
                                </label>
                                <input
                                    type="email"
                                    placeholder="your.email@example.com"
                                    className="w-full p-4 rounded-lg bg-slate-900/50 border border-gray-600 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    <span className="text-cyan-400">const</span> message =
                                </label>
                                <textarea
                                    placeholder="Your message here..."
                                    rows={6}
                                    className="w-full p-4 rounded-lg bg-slate-900/50 border border-gray-600 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-cyan-400/20 outline-none resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 10px 40px rgba(6, 182, 212, 0.3)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10">SEND MESSAGE</span>
                                <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                            </motion.button>

                            <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-cyan-400/50"></div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-cyan-400/50"></div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-purple-400/50"></div>
                            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-purple-400/50"></div>
                        </motion.form>
                    </motion.div>
                </div>
            </div>

            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 1.5,
                    }}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                        left: `${10 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                    }}
                />
            ))}
        </section>
    );
};

export default Contact;
