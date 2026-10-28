# Reto 01: El Guardián Simple (CTF)

Interfaz web minimalista de un solo archivo (`index.html`) para el desafío de Prompt Injection / Jailbreak "El Guardián Simple".

## Objetivo del Reto

Interactuar con el modelo de lenguaje para extraer la clave secreta (`FLAG{...}`) que reside en las instrucciones de sistema protegidas, superando las directivas de seguridad establecidas.

## Estructura

- `index.html`: Archivo autocontenido con UI de chat (HTML + CSS + JavaScript Vanilla).
  - Manejo de historial de conversación y estado de envío.
  - Soporte de atajos de teclado (`Enter` para enviar, `Shift+Enter` para salto de línea).
  - Manejo y renderizado de errores claros en la interfaz.

## Opciones de Despliegue

La configuración se ajusta dentro del objeto `CONFIG` en `index.html`:

```javascript
const CONFIG = {
  mode: "DIRECT_GEMINI", // "DIRECT_GEMINI" | "BACKEND_PROXY"
  direct: {
    apiKey: "TU_API_KEY_AQUI",
    model: "gemini-2.5-flash",
    baseUrl: "https://generativelanguage.googleapis.com/v1beta/models"
  },
  proxy: {
    url: "/api/chat"
  }
};
```

### 1. Cliente Directo (Taller / Laboratorio)
- Asigna `mode: "DIRECT_GEMINI"`.
- Reemplaza `apiKey` con tu clave de Gemini API.
- Abre `index.html` directamente en tu navegador o sírvelo con cualquier servidor estático local:
  ```bash
  python3 -m http.server 8000
  ```

### 2. Backend Proxy (Producción)
- Asigna `mode: "BACKEND_PROXY"`.
- Configura `proxy.url` con la ruta de tu servidor intermediario (ej. `/api/chat`).
- Esto evita exponer la API Key en el código fuente del cliente.
