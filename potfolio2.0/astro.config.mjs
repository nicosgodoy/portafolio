// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import mdx from '@astrojs/mdx';
import playformCompress from "@playform/compress";
// ❌ ¡Se eliminó la línea de importación de netlify! (y la de vercel)


// https://astro.build/config
export default defineConfig({
  // Nota: Para un portafolio estático, esta es la configuración más eficiente.
  integrations: [
    tailwind(),
    mdx(),
    astroIcon({
      include: {
        mdi: ["*"],
        ri: ['*'],
        'simple-icons': ['*'],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,  
      },
    })
  ],
  // ✅ El modo 'static' es ideal para tu portafolio.
  output: 'static', 
  // ❌ Eliminamos la línea del adaptador
});
