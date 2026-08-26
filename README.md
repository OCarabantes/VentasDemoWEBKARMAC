# KARMAC Web & Intranet Demo

Demostración web comercial, catálogo interactivo e Intranet/CRM de Ventas KARMAC optimizado para terreno (escritorio y móvil).

## 🚀 Despliegue en Vercel

Este proyecto cuenta con configuraciones automáticas (`vercel.json`) listas para desplegar la app demo SPA de manera funcional en Vercel.

### Pasos para desplegar:

1. **Importar Repositorio en Vercel:**
   - Ve a [Vercel Dashboard](https://vercel.com/new) e importa el repositorio `VentasDemoWEBKARMAC`.

2. **Configuración del Proyecto:**
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (o dejar por defecto)
   - **Build Command:** `npm run vercel-build` (o `npm run build --workspace frontend`)
   - **Output Directory:** `frontend/dist`

3. **Desplegar via Vercel CLI (Opcional):**
   ```bash
   npx vercel
   ```

---

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar aplicación en modo desarrollo
npm run dev
```

---

## 📄 Licencia & Propiedad
KARMAC S.A. - Todos los derechos reservados.
