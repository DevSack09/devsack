# Dev.Sack — Portfolio Personal

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" />
  <img src="https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat-square&logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-ff4154?style=flat-square&logo=framer" />
</p>

> Ecosistema de Desarrollo Premium — Portafolio personal construido con las últimas tecnologías del ecosistema React.

---

## ✨ Características

- **Next.js 16** con React Compiler activado para optimización automática
- **React 19** — últimas APIs y mejoras de rendimiento
- **Animaciones premium** con Framer Motion (spring physics, scroll reveal, efectos glow)
- **Diseño dark mode** con paleta de colores personalizada (`dev-blue` / `dev-green`)
- **Totalmente responsivo** — optimizado para mobile y desktop
- **TypeScript estricto** en todo el proyecto

---

## 🗂️ Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx        # Root layout (fuentes, metadata global)
│   ├── page.tsx          # Página principal
│   └── globals.css       # Estilos globales + tokens Tailwind
├── components/
│   ├── sections/         # Secciones de la página
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── TechStack.tsx
│   │   └── Contact.tsx
│   ├── shared/           # Componentes reutilizables de layout
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Background.tsx
│   └── ui/               # Componentes UI atómicos
├── hooks/                # Custom hooks
├── lib/
│   └── utils.ts          # Utilidades (cn, etc.)
└── types/                # Tipos TypeScript compartidos
```

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js `>= 18`
- Yarn `>= 4` (gestor de paquetes configurado vía `.yarnrc.yml`)

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd devsack

# Instalar dependencias
yarn install
```

### Desarrollo

```bash
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
# Construir
yarn build

# Iniciar servidor de producción
yarn start
```

### Lint

```bash
yarn lint
```

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 16 | Framework fullstack (App Router) |
| [React](https://react.dev) | 19 | UI |
| [TypeScript](https://www.typescriptlang.org) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilos utilitarios |
| [Framer Motion](https://www.framer.com/motion) | 12 | Animaciones |
| [Lucide React](https://lucide.dev) | latest | Iconografía |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | latest | Gestión dinámica de clases |

---

## 📄 Licencia

Dev.Sack
