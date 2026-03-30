# Ojo Rojo Japanese Cuisine - React/Next.js

Sitio web moderno para el restaurante Ojo Rojo Japanese Cuisine en Mexicali, B.C.

## Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **GSAP** - Animaciones profesionales
- **Lucide React** - Iconos SVG minimalistas

## Características

- ✨ Diseño moderno con efectos liquid glass
- 🎨 Tema oscuro vantablack (#000000) con acentos rojos (#8B0000)
- 📱 Completamente responsive
- 🎭 Animaciones profesionales con GSAP
- 🍱 Menú completo con 10 categorías
- 🖼️ Galería de imágenes interactiva
- 📍 Sección de contacto con información del restaurante

## Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador

## Compilar para producción

```bash
npm run build
npm start
```

## Estructura del Proyecto

```
react-app/
├── app/
│   ├── layout.tsx          # Layout principal con metadata
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Navegación con scroll spy
│   ├── Hero.tsx            # Sección hero con logo y botones
│   ├── About.tsx           # Información del restaurante
│   ├── Menu.tsx            # Menú completo con tabs
│   ├── Gallery.tsx         # Galería de imágenes
│   ├── Contact.tsx         # Información de contacto
│   ├── Footer.tsx          # Footer con redes sociales
│   └── ui/
│       └── liquid-glass.tsx # Componentes de efecto glass
├── public/                 # Imágenes y assets estáticos
└── tailwind.config.ts      # Configuración de Tailwind

```

## Personalización

### Colores

Los colores principales se definen en `tailwind.config.ts`:

- **Primary**: #8B0000 (Rojo oscuro)
- **Black Primary**: #000000 (Vantablack)
- **Black Secondary**: #000000 (Negro profundo)

### Menú

El menú completo está en `components/Menu.tsx`. Incluye:

- 🔥 Entradas Calientes
- ❄️ Entradas Frías
- 🍣 Rollos Ojo Rojo
- 🐟 Tiraditos
- 🥗 Ceviches
- 🍚 Arroces
- 🍜 Sopas
- 🍽️ Platillos
- 🦐 Mariscos
- 🍰 Postres

## Licencia

© 2026 Ojo Rojo Japanese Cuisine. Todos los derechos reservados.
