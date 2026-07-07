# 🚀 Nivel 1: Setup del Entorno y Arquitectura Inicial

Este nivel establece los cimientos de nuestra aplicación. No solo instalamos herramientas; configuramos un ecosistema de alto rendimiento optimizado para **Linux CachyOS** y el desarrollo profesional con **Next.js**.

---

## 1.1. Tooling Pro: Eficiencia con PNPM
En lugar de `npm` o `yarn`, utilizamos **PNPM**. 
- **Conceptos Clave:** PNPM utiliza un almacén direccionable por contenido para guardar todas las versiones de todos los paquetes en tu disco. Si usas la misma versión de React en 10 proyectos, solo ocupa espacio una vez [Manual Next.js, 11].
- **Buenas Prácticas:** Al ser una distro basada en Arch como CachyOS, mantener el disco limpio es vital. PNPM evita las "dependencias fantasma", lo que significa que un paquete no puede usar una dependencia que no haya declarado explícitamente.

---

## 1.2. Inicialización: Next.js + TypeScript (Default Config)
Instalamos el framework usando el asistente oficial, optando por la configuración recomendada por los arquitectos de Vercel.

**Comando utilizado:**
`pnpm create next-app@latest` (Seleccionando "No" en "change configuration" para usar los defaults óptimos).

### ¿Por qué Next.js y no React puro?
- **SSR (Server-Side Rendering):** A diferencia de `create-react-app`, Next.js renderiza el HTML en el servidor [1, 2]. Esto permite que la página sea visible para el usuario antes de que se cargue todo el JavaScript [3].
- **SEO y Redes Sociales:** Al enviar HTML real, los motores de búsqueda indexan tu contenido fácilmente y puedes tener metaetiquetas dinámicas para previsualizaciones en Twitter o Facebook [4, 5].
- **Comparativa:** Si vienes de **PHP**, el SSR de Next.js es conceptualmente similar a cómo PHP genera HTML en el servidor, pero con la interactividad de una Single Page Application (SPA) en el cliente [5, 6].

---

## 1.3. Arquitectura Inicial y Estructura de Carpetas
Al aceptar la configuración por defecto, Next.js organiza el proyecto de forma modular.
- **Carpeta `src/`:** Centraliza el código fuente, separándolo de archivos de configuración como `next.config.js` o `tsconfig.json` [7, 8].
- **App Router (`app/`):** Utiliza un sistema de enrutamiento basado en archivos. Cada carpeta dentro de `app` que contenga un archivo `page.tsx` se convierte automáticamente en una ruta de tu sitio [9, 10].

**Planificación Proactiva:** 
> Esta estructura modular permite "Separación de Intereses" (Separation of Concerns). Al escalar, podemos extraer lógica de negocio a la carpeta `lib/` o `hooks/` sin romper la estructura de navegación del App Router [8].

---

## 1.4. Linters y Formateadores: Código Autodocumentado
La configuración por defecto incluye **ESLint**. 
- **Conceptos Clave:** El linter analiza tu código en busca de errores potenciales y malas prácticas antes de que ejecutes la app [Manual Next.js, 9].
- **Clean Code:** Buscamos código que no necesite comentarios. Los nombres de tus carpetas y archivos en el App Router ya explican la arquitectura de navegación [8].

---

## 🛠️ Mini-Proyecto: "Cimientos Sólidos"
1. Instala el proyecto con `pnpm create next-app@latest`.
2. Verifica el servidor de desarrollo con `pnpm run dev`.
3. **Inspección Pro:** Abre la URL en Chrome, haz clic derecho y selecciona "Ver código fuente de la página". Deberías ver el texto inicial de Next.js dentro del HTML, confirmando que el SSR está funcionando [2, 5].
4. Instala las **React Developer Tools** para inspeccionar el árbol de componentes y los props en tiempo real [11, 12].

---

## 🧠 Trivia Challenge
1. **¿Qué icono aparece en la esquina inferior derecha en modo desarrollo?** El rayo (Lightning bolt) indica que la página califica para optimización estática automática [13].
2. **¿Cuál es la ventaja de la "división de código" (Code Splitting) en Next.js?** Garantiza que el navegador solo cargue el JavaScript necesario para la página específica que estás viendo, acelerando la carga inicial [14, 15].
3. **¿Por qué usamos TypeScript desde el inicio?** Para detectar errores de tipo (como pasar un string donde se espera un número) durante el desarrollo y no cuando el usuario ya está usando la app [Manual Next.js, 9; React Práctico, 355].

---
**¿Listo para lo siguiente? Dime: "Siguiente nivel: JS para React".**