import {defineConfig} from 'vite';
import {resolve} from 'node:path';
export default defineConfig({build:{rollupOptions:{input:Object.fromEntries(['index','psd-to-png','psd-viewer','photocraft-guide','privacy','terms','licenses'].map(p=>[p,resolve(process.cwd(),p==='index'?'index.html':`${p}/index.html`)]))}}});
