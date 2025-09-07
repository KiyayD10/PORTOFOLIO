import { useState } from "react"
import { motion } from "framer-motion";

const images = [
    "/src/assets/gallery/gallery1.jpg",
    "/src/assets/gallery/gallery2.jpg",
    "/src/assets/gallery/gallery3.jpg",
];

const Gallery = () => {
    const [selected, setSelected] = useState<string | null>(null);

    return(
        <section>
            <div>
                <h2>Gallery</h2>
                <div>
                    {images.map((src, index) => (
                        <motion.img 
                        key={index}
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => setSelected(src)}
                        />
                    ))}
                </div>
            </div>
            {selected && (
                <div
                onClick={() => setSelected(null)}
                >
                    <motion.img 
                    src={selected}
                    alt="Selected"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    />
                </div>
            )}
        </section>
    );
};

export default Gallery;