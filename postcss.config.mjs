import tailwindcss from '@tailwindcss/postcss'; // Import from @tailwindcss/postcss
import autoprefixer from 'autoprefixer';

const config = {
  plugins: [
    tailwindcss({}), // Use the imported tailwindcss from @tailwindcss/postcss
    autoprefixer({}),
  ],
};

export default config;
