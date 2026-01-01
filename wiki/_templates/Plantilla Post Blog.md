<%*
// 1. Pedir el título del Post al usuario
let title = await tp.system.prompt("Título del Post");
if (title == null || title == "") { title = "Nuevo Post"; }

// 2. Obtener las fechas automáticas
// Para el contenido (con hora y zona horaria)
let fullDate = tp.date.now("YYYY-MM-DD HH:mm:ss Z");
// Para el nombre del archivo (solo año-mes-día)
let fileDate = tp.date.now("YYYY-MM-DD");

// 3. Crear el "slug" para la URL (limpieza de texto igual que en la wiki)
let slug = title.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

// 4. Renombrar el archivo al formato estricto de Jekyll: AÑO-MES-DIA-titulo.md
await tp.file.rename(`${fileDate}-${slug}`);
%>
---
layout: post
title: "<% title %>"
date: <% fullDate %>
categories: [General]
---

# <% title %>