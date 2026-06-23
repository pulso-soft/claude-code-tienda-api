# tienda-api

Proyecto de práctica del curso **Claude Code** (Pulso Soft).
Es el punto de partida que usás en la Clase 1.3 — todavía no tiene el endpoint `/health`
ni las validaciones completas que vas a ir agregando a lo largo del curso.

## Levantar el proyecto

```bash
npm install
npm run dev
```

El server queda corriendo en `http://localhost:3000`.

## Comandos útiles

- `npm run dev` → levanta el server en modo desarrollo (recarga automática)
- `npm start` → levanta el server en modo normal
- `npm test` → corre los tests con Jest

## Endpoints iniciales

- `GET /productos` → lista los productos en memoria
- `POST /productos` → crea un producto (`{ "nombre": "...", "precio": 0 }`)
