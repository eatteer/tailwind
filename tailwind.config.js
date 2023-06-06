const Color = require("color");

const generateShades = (name, color) => {
  const baseColor = Color(color);

  const shades = {
    [`${name}-50`]: baseColor.lighten(0.9).hex(),
    [`${name}-100`]: baseColor.lighten(0.8).hex(),
    [`${name}-200`]: baseColor.lighten(0.6).hex(),
    [`${name}-300`]: baseColor.lighten(0.4).hex(),
    [`${name}-400`]: baseColor.lighten(0.2).hex(),
    [`${name}-500`]: baseColor.hex(),
    [`${name}-600`]: baseColor.darken(0.2).hex(),
    [`${name}-700`]: baseColor.darken(0.4).hex(),
    [`${name}-800`]: baseColor.darken(0.6).hex(),
    [`${name}-900`]: baseColor.darken(0.8).hex(),
    [`${name}-950`]: baseColor.darken(0.9).hex(),
  };

  return shades;
};

const colors = {
  ...generateShades("primary", "#fde047"),
  ...generateShades("secondary", "#d946ef"),
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: colors,
    },
  },
  plugins: [],
};
