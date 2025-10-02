import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type ImageModule = { default: string };

const images = Object.values(
    import.meta.glob<ImageModule>("../assets/gallery/*.{jpg,jpeg,png,svg}", { eager: true })
).map((img) => img.default);

const Gallery = () => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <section id="gallery" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;80&quot; height=&quot;80&quot; viewBox=&quot;0 0 80 80&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23A855F7&quot; fillOpacity=&quot;0.03&quot;%3E%3Cpath d=&quot;M0 0h40v40H0z&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                            &gt; GALLERY_SHOWCASE
                        </span>
                    </h2>
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        <span className="text-cyan-400 font-mono">//</span> Beberapa momen seru bareng teman, serta dokumentasi saat saya meraih prestasi di lomba.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative cursor-pointer"
                            onClick={() => setSelected(src)}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-400/20 group-hover:border-purple-400/50 transition-all duration-300"
                            >
                                <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-4xl max-h-[80vh] w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSelected(null)}
                                className="absolute -top-12 right-0 w-10 h-10 bg-red-500/20 border border-red-400 rounded-full flex items-center justify-center text-red-400 hover:bg-red-500/30 transition-colors duration-300 z-10"
                            >
                                <X size={20} />
                            </motion.button>

                            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-400/30">
                                <motion.img
                                    src={selected ?? undefined}
                                    alt="Selected"
                                    className="w-full h-auto max-h-[70vh] object-contain"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;
