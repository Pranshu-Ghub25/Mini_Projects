import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/



export default defineConfig({
  define: {
    VITE_REACT_APP_API_KEY: JSON.stringify(process.env.VITE_REACT_APP_API_KEY)
  },
  plugins: [react()],
});
