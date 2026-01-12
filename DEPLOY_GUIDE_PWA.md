# Guía de Despliegue y PWA

Tu aplicación "Atérmicos Celina" ya está configurada como una **PWA (Progressive Web App)**. Esto significa que una vez desplegada en una URL pública, podrás instalarla en Android (Chrome) y iOS (Safari) como si fuera una app nativa.

## 1. Subir el código a GitHub

Para que la aplicación sea accesible en internet, lo más fácil es usar **Vercel**, que se conecta con GitHub.

1.  Abre una terminal en esta carpeta.
2.  Si no tienes un repositorio remoto conectado, crea uno en [GitHub](https://github.new).
3.  Conecta tu repositorio local con el remoto:
    ```bash
    git remote add origin https://github.com/TU_USUARIO/atermicos-celina.git
    git branch -M main
    git push -u origin main
    ```
    *(Reemplaza `TU_USUARIO` y la URL con la de tu nuevo repositorio)*.

## 2. Desplegar en Vercel

1.  Ve a [Vercel.com](https://vercel.com) e inicia sesión.
2.  Haz clic en **"Add New..."** -> **"Project"**.
3.  Selecciona el repositorio `atermicos-celina` que acabas de subir.
4.  Haz clic en **"Deploy"**.
5.  ¡Listo! En unos minutos te darán una URL (ej: `atermicos-celina.vercel.app`).

## 3. Instalar en Móvil

### Android
1.  Abre la URL de tu app en **Chrome**.
2.  Debería aparecer un aviso para "Instalar Atérmicos Celina".
3.  Si no, ve al menú (tres puntos) -> **"Instalar aplicación"** o **"Agregar a la pantalla principal"**.

### iOS (iPhone/iPad)
1.  Abre la URL de tu app en **Safari**.
2.  Toca el botón **Compartir** (cuadrado con flecha hacia arriba).
3.  Busca y selecciona **"Agregar al inicio"** (Add to Home Screen).

¡Ahora tendrás el ícono de Atérmicos Celina en tu pantalla de inicio y se abrirá en pantalla completa sin barra de navegador!
