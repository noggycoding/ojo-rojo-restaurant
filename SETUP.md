# Guía de Instalación - Ojo Rojo React App

## Requisitos Previos

- Node.js 18.x o superior
- npm o yarn

## Pasos de Instalación

### 1. Navegar al directorio del proyecto

```bash
cd "ojo red/react-app"
```

### 2. Instalar dependencias

```bash
npm install
```

Esto instalará todas las dependencias necesarias:
- React 18.3.1
- Next.js 14.2.0
- TypeScript 5.3.0
- Tailwind CSS 3.4.0
- GSAP 3.12.5
- Lucide React 0.344.0

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

El sitio estará disponible en: http://localhost:3000

### 4. Compilar para producción

```bash
npm run build
```

### 5. Ejecutar versión de producción

```bash
npm start
```

## Estructura de Componentes

- **Header**: Navegación fija con scroll spy
- **Hero**: Sección principal con logo y botones glass
- **About**: Información del restaurante con estadísticas
- **Menu**: Sistema de tabs con 10 categorías de menú
- **Gallery**: Galería de imágenes con efectos hover
- **Contact**: Información de contacto y mapa
- **Footer**: Redes sociales y copyright

## Características Implementadas

✅ Diseño responsive (mobile, tablet, desktop)
✅ Animaciones GSAP profesionales
✅ Efectos liquid glass en botones
✅ Tema oscuro vantablack (#000000)
✅ Color primario rojo (#8B0000)
✅ Iconos SVG minimalistas (Lucide)
✅ Menú completo con 10 categorías
✅ Scroll suave entre secciones
✅ TypeScript para type safety
✅ Tailwind CSS para estilos

## Solución de Problemas

### Error: Cannot find module 'react'

Ejecuta: `npm install`

### Puerto 3000 en uso

Cambia el puerto: `npm run dev -- -p 3001`

### Errores de TypeScript

Los errores de TypeScript se resolverán automáticamente después de `npm install`

## Personalización

### Cambiar colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#8B0000", // Tu color aquí
  },
}
```

### Modificar menú

Edita el array `categories` en `components/Menu.tsx`

### Cambiar imágenes

Reemplaza las imágenes en la carpeta `public/`

## Comandos Útiles

```bash
npm run dev      # Desarrollo
npm run build    # Compilar
npm start        # Producción
npm run lint     # Linter
```

## Soporte

Para problemas o preguntas, contacta al equipo de desarrollo.
