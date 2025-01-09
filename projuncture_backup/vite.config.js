import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Avatar } from 'antd';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['antd']
  }
})
