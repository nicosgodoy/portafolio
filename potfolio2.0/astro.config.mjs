// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from 'astro-icon';
import mdx from '@astrojs/mdx';
import playformCompress from "@playform/compress";
// ✅ Importar Netlify (aunque no lo usaremos en modo estático, es la dependencia correcta)
import netlify from "@astrojs/netlify"; 
// ❌ Eliminamos la importación de vercel

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
  // ✅ CAMBIO 1: El modo 'static' es ideal para tu portafolio.
  output: 'static', 
  // ❌ CAMBIO 2: Eliminamos el adaptador, ya que 'static' no lo requiere.
  // adapter: netlify(), 
});
