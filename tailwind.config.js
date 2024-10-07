module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],  // Include your JSX/TSX files
  theme: {
    extend: {
      colors: {
        customWhite: '#fbf7f0',
        customBlack: '#1b1917',
        customPurple: '#7E60BF',
        customGreen: {
          light: '#A7F3D0',
          DEFAULT: '#10B981',
          dark: '#047857',
        },
      },
    },
  },
  plugins: [],
};