import { useState } from "react"
import { motion } from "framer-motion";

const images = Object.values(
    import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,svg}", { eager: true })
).map((img: any) => img.default);

const Gallery = () => {
    const [selected, setSelected] = useState<string | null>(null);

    return(
        <section id="gallery" className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12 text-futuristic-500">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <motion.img 
                        key={index}
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-2xl shadow-md cursor-pointer object-cover w-full h-64"
                        onClick={() => setSelected(src)}
                        />
                    ))}
                </div>
            </div>
            {selected && (
                <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                onClick={() => setSelected(null)}
                >
                    <motion.img 
                    src={selected}
                    alt="Selected"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="max-h-[80vh] max-w-[90vw] rounded-xl shadow-lg"
                    />
                </div>
            )}
        </section>
    );
};

export default Gallery;