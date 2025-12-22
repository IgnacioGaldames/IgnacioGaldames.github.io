---
layout: page-sidebar-right
title: Sobre Mí
permalink: /iagaldames/
---

# I.A. Galdames

<img class="img-fluid shadow rounded" src="{{site.author_image_path}}" alt="{{ site.author_name }}">
{{ site.description | safeHTML}}
## Mis Cursos

He tomado diferentes cursos, talleres y certificaciones.

Algunas de ellos son:
<p>
	{% assign sortedItems = site.data.mis_cursos.cursos | sort: "fechaItem" %}
	<ul>
		{% for miItem in sortedItems %}
			{% if miItem.nombreItem %}
				<li>{% if miItem.tipoItem %}<b>{{ miItem.tipoItem }}:</b>{% endif %} {{ miItem.nombreItem }} en {{ miItem.institucionItem }}, <small><span class="fw-lighter">{{ miItem.fechaItem }}</span></small></li>
			{% endif %}
		{% endfor %}
	</ul>
</p>

## Mis Publicaciones

He publicado diferentes cuentos y libros.
<p>
	{% assign sortedItems = site.data.mis_publicaciones.publicaciones | sort: "fechaItem" %}
	<ul>
		{% for miItem in sortedItems %}
			{% if miItem.nombreItem %}
				<li>{% if miItem.tipoItem %}<b>{{ miItem.tipoItem }}:</b>{% endif %} {{ miItem.nombreItem }} en {{ miItem.institucionItem }}, <small><span class="fw-lighter">{{ miItem.fechaItem }}</span></small></li>
			{% endif %}
		{% endfor %}
	</ul>
</p>

## Mis libros

Los libros y antologías en los que aparezco son:
<p>
	{% assign librosOrdenados = site.libros | sort: "fechaPublicacion" | reverse %}
 
	<ul>
	 {% for miLibro in librosOrdenados %}
		{% if miLibro.nombreLibro %}
			<li><b>{{ miLibro.nombreLibro }}</b> , <small><span class="fw-lighter">{{ miLibro.fechaPublicacion }}</span></small></li>
		{% endif %}
		{% endfor %}
	</ul>
</p>

### Mi Trabajo

Puedes encontrar mis libros e historias en [Goodreads](https://www.goodreads.com/author/show/16542460.I_A_Galdames). También comparto regularmente actualizaciones e ideas sobre mi proceso de escritura en mis plataformas de redes sociales.

### Conéctate Conmigo

<div class="row">
	<div class="col-md-6">
		{% include redes.html %}
		</div>
</div>