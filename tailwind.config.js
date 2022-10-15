/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            swxiketic: { DEFAULT: "#230F12" },
            swbdazzledblue: { DEFAULT: "#15589C" },
            swbdazzledbluelight: { DEFAULT: "#2176cc" },
            swbone: { DEFAULT: "#E8DDC7" },
            swflame: { DEFAULT: "#DA6C3A" },
            swmaizecrayola: { DEFAULT: "#E3BF3F" },
            swgunmetal: { DEFAULT: "#273740" },
            swrufous: { DEFAULT: "#AA2816" },
            swrusset: { DEFAULT: "#8D5535" },
            swshadowblue: { DEFAULT: "#79889E" },
            swraisinblack: { DEFAULT: "#2A2125" },
        },
    },
    plugins: [],
};
