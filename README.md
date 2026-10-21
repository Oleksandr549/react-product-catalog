# Shelf: product catalog

A single-page product catalog built with React and TypeScript. Data comes from the public [DummyJSON](https://dummyjson.com) API.

**Live demo:** https://react-product-catalog-1airx4va5.vercel.app/

## Features

- Product list loaded from a REST API
- Search by name and filter by category
- Product details page (`/item/:id`) with image gallery
- Custom `useFetch` hook returning `data / loading / error`, with request cancellation via `AbortController`
- Loading, error and empty states
- Responsive layout with CSS Modules, no UI libraries
- Client-side routing with React Router and a 404 page

## Tech stack

React 19 · TypeScript · Vite · React Router · CSS Modules · ESLint · Vercel

## Project structure

```
src/
  api/          API client and request functions
  types/        TypeScript types for API data
  hooks/        custom hooks (useFetch)
  components/   reusable components
    ui/         Loader, ErrorMessage, EmptyState
  layouts/      RootLayout (header, footer, outlet)
  pages/        route components
  router.tsx    route configuration
```

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build
npm run preview
npm run lint
```

## Roadmap

- TypeScript strict mode
- Runtime validation of API responses with Zod
- Product form with react-hook-form + Zod
