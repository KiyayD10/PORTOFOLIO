import {motion} from "framer-motion";
import {Mail, Phone, MapPin, Github, Linkedin, Instagram} from "lucide-react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900"
        >
            <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <p className="text-lg">
                        Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk
                        menghubungi saya melalui informasi berikut:
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <Mail className="text-futuristic-500"/>
                            <span>robani@example.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="text-futuristic-500"/>
                            <span>+62 812 3456 7890</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <MapPin className="text-futuristic-500"/>
                            <span>Indonesia</span>
                        </div>
                    </div>
                    <div className="flex space-x-4 pt-4">
                        <a href="https://github.com/KiyayD10" target="_blank">
                            <Github className="w-6 h-6 hover:text-futuristic-500 transition"/>
                        </a>
                        <a href="https://www.linkedin.com/in/robani-diansyah-8b20082a6/" target="_blank">
                            <Linkedin className="w-6 h-6 hover:text-futuristic-500 transition"/>
                        </a>
                        <a href="https://www.instagram.com/robani_d10/" target="_blank">
                            <Instagram className="w-6 h-6 hover:text-futuristic-500 transition"/>
                        </a>
                    </div>
                </motion.div>
                <motion.form
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full py-3 bg-futuristic-500 text-white font-medium rounded-lg hover:bg-futuristic-600 transition"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
