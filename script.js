async function copyPrompt() {
  const promptText = document.getElementById("system-prompt").textContent.trim();
  const btn = document.getElementById("copy-btn");
  const textSpan = document.getElementById("copy-text");
  const iconSpan = document.getElementById("copy-icon");

  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(promptText);
    } else {
      // Fallback para entornos que bloqueen clipboard API
      const textarea = document.createElement("textarea");
      textarea.value = promptText;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    btn.classList.add("copied");
    textSpan.textContent = "¡Copiado!";
    iconSpan.textContent = "✅";

    setTimeout(() => {
      btn.classList.remove("copied");
      textSpan.textContent = "Copiar Prompt";
      iconSpan.textContent = "📋";
    }, 2000);
  } catch (err) {
    textSpan.textContent = "Error al copiar";
    setTimeout(() => {
      textSpan.textContent = "Copiar Prompt";
    }, 2000);
  }
}
