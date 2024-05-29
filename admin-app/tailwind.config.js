/** @type {import('tailwindcss').Config} */
const usedColors = [
    "blue",
    "red",
    "green",
    "orange",
    "violet",
    "purple",
    "gray",
];

module.exports = {
    

    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

                "gradient-to-br":
                    "linear-gradient(to bottom right, var(--tw-gradient-stops));",
            },
        },
    },
    safelist: usedColors
        .map((c) => [
            `from-${c}-100`,
            `from-${c}-200`,
            `from-${c}-300`,
            `from-${c}-400`,
            `from-${c}-500`,
            `from-${c}-600`,
            `from-${c}-700`,
            `from-${c}-800`,
            `from-${c}-900`,
            `to-${c}-100`,
            `to-${c}-200`,
            `to-${c}-300`,
            `to-${c}-400`,
            `to-${c}-500`,
            `to-${c}-600`,
            `to-${c}-700`,
            `to-${c}-800`,
            `to-${c}-900`,
        ])
        .flat(),
    plugins: [],
};
