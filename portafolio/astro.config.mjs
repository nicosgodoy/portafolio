// @ts-check
//import { defineConfig } from 'astro/config';

// https://astro.build/config
//export default defineConfig({});



// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react"; // ⬅️ Necesario si usas React

// https://astro.build/config
export default defineConfig({
  // ✅ CRUCIAL: MODO ESTATICO. Esto resuelve el problema del despliegue en Netlify.
  output: 'static', 
  
  // ✅ Incluye React si lo usas para componentes de interfaz.
  integrations: [
    react()
  ],
  
  // ❌ No se incluye ningún adaptador (netlify, vercel)
});

