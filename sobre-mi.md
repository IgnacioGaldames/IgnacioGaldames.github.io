---
layout: page-sidebar-right
title: Sobre Mí
permalink: /iagaldames/
---

# I.A. Galdames

{{ site.description | safeHTML}}

## Mis Cursos

He tomado diferentes cursos, talleres y certificaciones.

Algunas de ellos son:
<p>
  {% assign sortedItems = site.data.mis_cursos.cursos | sort: "fechaItem" %}
  {% for miItem in sortedItems %}
    {% if miItem.nombreItem %}
      {{ miItem.nombreItem }} en {{ miItem.institucionItem }}, 
    {% endif %}
  {% endfor %}
</p>

## Mis Publicaciones

He publicado diferentes cuentos y libros.
<p>
  {% assign sortedItems = site.data.mis_publicaciones.publicaciones | sort: "fechaItem" %}
  {% for miItem in sortedItems %}
    {% if miItem.nombreItem %}
      {{ miItem.nombreItem }} en {{ miItem.institucionItem }}, 
    {% endif %}
  {% endfor %}
</p>

## Mis libros

Los libros y antologías qen los que aparezco son:
<p>
  {% assign librosOrdenados = site.libros | sort: "fechaPublicacion" | reverse %}
  {% for miLibro in librosOrdenados  %}
    {% if miLibro.nombreLibro %}
      {{ miLibro.nombreLibro }}, 
    {% endif %}
  {% endfor %}
</p>

### Mi Trabajo

Puedes encontrar mis libros e historias en [Goodreads](https://www.goodreads.com/author/show/16542460.I_A_Galdames). También comparto regularmente actualizaciones e ideas sobre mi proceso de escritura en mis plataformas de redes sociales.

### Conéctate Conmigo

<div class="row">
  <div class="col-md-6">
    {% include redes.html %}
    </div>
</div>