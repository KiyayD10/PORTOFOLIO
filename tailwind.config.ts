import type {Config}
from "tailwindcss";

const config: Config = {
    darkMode: "class", // ✅ wajib biar dark mode jalan
    content: [
        "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                futuristic: {
                    500: "#00FFFF", // neon cyan
                    600: "#00E5E5"
                }
            }
        }
    },
    plugins: []
};

export default config;
