# Dev Days UCAB — Reto 01: El Guardián Simple

Landing page para el Reto 01 de Prompt Injection / Jailbreaking en Dev Days UCAB.

## Objetivo del Reto

Los participantes deben vulnerar un prompt de sistema seguro mediante técnicas de ingeniería de prompts e inyección para extraer la clave secreta (`FLAG{...}`), ejecutando la prueba en su chatbot preferido (ChatGPT, Claude, Gemini, etc.) y validando el resultado presencialmente con los organizadores.

## Contenido

- `index.html`: Landing estática responsive y ligera.
  - Presentación del reto y metadatos (Nivel: Principiante, Tiempo estimado: ~60 segundos).
  - Bloque con el prompt de sistema y botón de copiado rápido al portapapeles (con fallback para navegadores antiguos).
  - Guía paso a paso para jugar y comprobar presencialmente.
  - Cero dependencias externas y cero llamadas a APIs.

## Cómo visualizar localmente

Podés abrir `index.html` directamente en tu navegador o servirlo con cualquier servidor estático:

```bash
# Con Python
python3 -m http.server 8000

# Con npx / pnpm dlx
pnpm dlx serve .
```
