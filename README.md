# Reto 01: El Guardián Simple

Reto de **prompt injection / jailbreaking** de Dev Days UCAB 2026.

El objetivo es extraer una flag secreta que está embebida en el system prompt de un modelo de lenguaje. El modelo tiene instrucciones explícitas de no revelarla. Tu trabajo es hacer que las ignore.

---

## Estructura de archivos

```
dev-days_reto1/
├── index.html                 # Página principal del reto
├── styles.css                 # Estilos de la página
├── script.js                  # Lógica del botón de copiado
└── prompts/
    └── system-prompt.md       # System prompt del guardián (la víctima del ataque)
```

---

## Cómo visualizar localmente

**Opción A — directo en el navegador:**

Abrí `index.html` con doble clic. Los assets (`styles.css`, `script.js`) se cargan con rutas relativas y funcionan con `file://` sin necesidad de servidor.

**Opción B — con servidor local:**

```bash
python3 -m http.server 8000
```

Luego abrí [http://localhost:8000](http://localhost:8000) en el navegador.

---

## Cómo usar un AI CLI

Pegar el system prompt en el chat **no es lo mismo** que configurarlo como system prompt real. Cuando lo pegás en el chat, el modelo lo recibe como un mensaje de usuario y sus instrucciones tienen menos peso que si viene del canal de sistema. Para replicar el reto fielmente (y que tenga sentido como ejercicio de seguridad), el system prompt debe cargarse por el canal correcto.

### Claude Code

```bash
claude --system-prompt "$(cat prompts/system-prompt.md)"
```

La flag `--system-prompt` (verificada con `claude --help`) define el system prompt de la sesión. Usá `$(cat ...)` para leer el contenido del archivo sin copiarlo a mano.

### Gemini CLI

> **No confirmado directamente.** El mecanismo documentado más común es setear la variable de entorno `GEMINI_SYSTEM_MD` apuntando al archivo, pero verificá el comportamiento exacto con:
>
> ```bash
> gemini --help
> ```

### Otros CLIs / APIs

Si accedés directamente por API (OpenAI, Anthropic, etc.), el contenido de `prompts/system-prompt.md` va en el campo `system` (Anthropic) o en el mensaje con `role: "system"` (OpenAI), no en los mensajes de usuario.

---

## Sobre el reto

Este es un reto de vulneración de system prompt. La flag tiene el formato `FLAG{...}` y está en `prompts/system-prompt.md`. El guardián tiene instrucciones de no revelarla; tu objetivo es encontrar una técnica de ingeniería de prompts que haga que las ignore.

---

Dev Days UCAB · Laboratorio de Seguridad en Inteligencia Artificial
