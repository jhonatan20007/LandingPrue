/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#166FFA", // Azul principal, claro y vibrante
        secondary: "#FAFAFA", // Gris muy claro para fondos y superficies
        accent: "#FF6347", // Un toque de color vibrante, como un coral o rojo tomate
        background: {
          default: "#FFFFFF", // Fondo principal blanco
          light: "#F9F9F9", // Un gris claro para secciones o fondo alternativo
        },
        stroke: {
          // Colores para bordes o líneas
          1: "#d1d1d1", // Gris claro para bordes visibles pero sutiles
        },
        text: {
          default: "#333333", // Gris oscuro para la mayoría del texto
          muted: "#666666", // Gris medio para texto menos prominente
        },
        n: {
          // Escala de grises para fondos y componentes
          1: "#000", // Blanco
          2: "#fafafa", // Nuevo gris más claro que el original
          3: "#f5f5f5", // Gris claro
          4: "#eeeeee", // Gris medio
          5: "#e0e0e0", // Gris
          6: "#d6d6d6", // Gris oscuro
          7: "#cccccc", // Más gris oscuro
          8: "#ffffff", // Aún más gris oscuro
          9: "#b8b8b8", // Cercano a negro
          10: "#aeaeae", // Gris muy oscuro
          11: "#a4a4a4", // Más cercano a negro
          12: "#9a9a9a", // Casi negro
          13: "#909090", // Prácticamente negro
        },
        border: "#E0E0E0", // Gris claro para bordes y divisiones
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, var(--primary), var(--secondary), var(--background-default))",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
