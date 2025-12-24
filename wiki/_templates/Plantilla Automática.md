<%*
// 1. Pedir el título real al usuario
let title = await tp.system.prompt("Ingresa el Título de la Nota");

// Si el usuario cancela o no escribe nada, usamos el nombre actual del archivo
if (title == null || title == "") { title = tp.file.title }

// 2. Crear la versión "slug" (para la URL: minúsculas y guiones)
let slug = title.toLowerCase()
    .replace(/\s+/g, '-')     // Reemplaza espacios con guiones
    .replace(/[^\w\-]+/g, '') // Elimina caracteres no alfanuméricos (tildes, ñ, etc. básico)
    .replace(/\-\-+/g, '-')   // Reemplaza múltiples guiones por uno solo
    .replace(/^-+/, '')       // Elimina guiones al inicio
    .replace(/-+$/, '');      // Elimina guiones al final

// 3. Renombrar el archivo actual
await tp.file.rename(slug);
%>
---
title: <% title %>
layout: page
---

# <% title %>